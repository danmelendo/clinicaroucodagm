export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: string;
};

export type SendChatInput = {
  sessionId: string;
  message: string;
  history: ChatMessage[];
};

export interface ChatGateway {
  sendMessage: (input: SendChatInput) => Promise<string>;
}

const WEBHOOK_URL = import.meta.env.VITE_CHAT_WEBHOOK_URL as string | undefined;

const localGateway: ChatGateway = {
  async sendMessage() {
    return "Gracias por tu mensaje. El asistente conversacional se conectara aqui en una siguiente fase.";
  },
};

const webhookGateway: ChatGateway = {
  async sendMessage(input) {
    if (!WEBHOOK_URL) {
      throw new Error("Webhook no configurado");
    }

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId: input.sessionId,
        message: input.message,
        history: input.history.map((item) => ({
          role: item.role,
          content: item.content,
          createdAt: item.createdAt,
        })),
      }),
    });

    if (!response.ok) {
      throw new Error("Error al invocar webhook");
    }

    const payload = (await response.json()) as
      | { reply?: string; message?: string; text?: string }
      | undefined;

    return (
      payload?.reply ||
      payload?.message ||
      payload?.text ||
      "Respuesta recibida sin contenido"
    );
  },
};

export const chatGateway: ChatGateway = WEBHOOK_URL ? webhookGateway : localGateway;
