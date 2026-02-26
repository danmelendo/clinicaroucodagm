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

type WebhookPayload = {
  user: string;
  agent: string;
  message: string;
  source: "web-chat";
};

const WEBHOOK_URL = (import.meta.env.VITE_CHAT_WEBHOOK_URL as string | undefined)?.trim();
const WEBHOOK_TOKEN = (import.meta.env.VITE_CHAT_WEBHOOK_TOKEN as string | undefined)?.trim();
const WEBHOOK_TIMEOUT_MS = Number(import.meta.env.VITE_CHAT_WEBHOOK_TIMEOUT_MS || 15000);

const extractReply = (payload: unknown): string | null => {
  if (payload === null || payload === undefined) return null;
  if (typeof payload === "string") return payload.trim() || null;
  if (typeof payload === "number" || typeof payload === "boolean") return String(payload);

  if (Array.isArray(payload)) {
    for (const item of payload) {
      const nested = extractReply(item);
      if (nested) return nested;
    }
    return null;
  }

  if (typeof payload === "object") {
    const data = payload as Record<string, unknown>;
    const keys = [
      "reply",
      "message",
      "text",
      "Text",
      "texto",
      "Texto",
      "output",
      "response",
      "answer",
      "content",
      "data",
    ];
    for (const key of keys) {
      const nested = extractReply(data[key]);
      if (nested) return nested;
    }
  }

  return null;
};

const parseResponseBody = async (response: Response): Promise<unknown> => {
  const raw = await response.text();
  const trimmed = raw.trim();
  if (!trimmed) return null;

  try {
    return JSON.parse(trimmed) as unknown;
  } catch {
    return trimmed;
  }
};

export const chatConfig = {
  webhookUrl: WEBHOOK_URL || "",
  enabled: Boolean(WEBHOOK_URL),
};

export async function sendChatMessage(input: SendChatInput): Promise<string> {
  if (!WEBHOOK_URL) {
    throw new Error("Webhook no configurado. Define VITE_CHAT_WEBHOOK_URL en .env");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  const payload: WebhookPayload = {
    user: input.message,
    agent: "",
    message: input.message,
    source: "web-chat",
  };

  let response: Response;
  try {
    response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(WEBHOOK_TOKEN ? { Authorization: `Bearer ${WEBHOOK_TOKEN}` } : {}),
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error desconocido";
    throw new Error(`No se pudo enviar al webhook: ${message}`);
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    throw new Error(`Webhook respondio con estado ${response.status}`);
  }

  const body = await parseResponseBody(response);
  const reply = extractReply(body);
  if (!reply) {
    throw new Error("Webhook sin contenido de respuesta");
  }

  return reply;
}
