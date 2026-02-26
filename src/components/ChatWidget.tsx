import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

const WEBHOOK_DELAY_MS = 2700;

const extractWebhookReply = (payload: unknown): string | null => {
  if (typeof payload === "string") {
    return payload;
  }

  if (!payload || typeof payload !== "object") {
    return null;
  }

  const data = payload as Record<string, unknown>;
  const directKeys = ["Texto", "reply", "response", "message", "text", "answer"];

  for (const key of directKeys) {
    const value = data[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return value;
    }
  }

  if (data.data) {
    return extractWebhookReply(data.data);
  }

  return null;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hola, soy el asistente de Rouco Fisioterapia. ¿En qué te puedo ayudar?",
    },
  ]);

  const webhookUrl = import.meta.env.VITE_CHAT_WEBHOOK_URL;
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!listRef.current) {
      return;
    }

    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, isLoading]);

  const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const text = input.trim();
    if (!text || isLoading) {
      return;
    }

    setInput("");
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    let reply = "Lo siento, ha habido un error al procesar tu mensaje.";

    try {
      if (!webhookUrl) {
        throw new Error("Webhook not configured");
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: text,
          agent: "",
          message: text,
          source: "web-chat",
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook status ${response.status}`);
      }

      const data = (await response.json().catch(() => null)) as unknown;
      reply = extractWebhookReply(data) ?? "Gracias por tu mensaje. Te responderemos en breve.";
    } catch {
      if (!webhookUrl) {
        reply =
          "El chat está activo, pero falta configurar VITE_CHAT_WEBHOOK_URL para enviar mensajes al webhook.";
      }
    } finally {
      await new Promise((resolve) => setTimeout(resolve, WEBHOOK_DELAY_MS));

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: reply,
        },
      ]);
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="w-[calc(100vw-2rem)] max-w-sm rounded-2xl border border-border bg-card shadow-2xl">
          <div className="flex items-center justify-between rounded-t-2xl bg-primary px-4 py-3 text-primary-foreground">
            <h3 className="font-semibold">Chat</h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1 transition hover:bg-primary-foreground/15"
              aria-label="Cerrar chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={listRef} className="h-80 space-y-3 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-md bg-primary text-primary-foreground"
                      : "rounded-bl-md bg-secondary text-secondary-foreground"
                  }`}
                >
                  {message.content}
                </p>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-secondary px-3 py-2 text-secondary-foreground">
                  <div className="chat-loader" aria-hidden="true">
                    <span className="chat-loader-dot chat-loader-dot-1" />
                    <span className="chat-loader-dot chat-loader-dot-2" />
                    <span className="chat-loader-dot chat-loader-dot-3" />
                  </div>
                  <span className="sr-only">Escribiendo...</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Escribe tu mensaje..."
                className="h-10 flex-1 rounded-lg border border-input bg-background px-3 text-sm outline-none ring-offset-background transition focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                disabled={!canSend}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Enviar"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex h-14 items-center gap-2 rounded-full bg-primary px-5 text-primary-foreground shadow-xl transition hover:scale-105 hover:bg-accent"
          aria-label="Abrir chat"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="text-sm font-semibold">¿Cómo podemos ayudarte?</span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
