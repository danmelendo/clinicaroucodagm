import { FormEvent, useMemo, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendChatMessage, type ChatMessage } from "@/lib/chat";

const MIN_REPLY_DELAY_MS = 2700;
const MAX_REPLY_DELAY_MS = 4200;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getReplyDelayMs = () =>
  Math.floor(Math.random() * (MAX_REPLY_DELAY_MS - MIN_REPLY_DELAY_MS + 1)) + MIN_REPLY_DELAY_MS;

const createMessage = (role: ChatMessage["role"], content: string): ChatMessage => ({
  id: crypto.randomUUID(),
  role,
  content,
  createdAt: new Date().toISOString(),
});

const ChatWidget = () => {
  const sessionId = useMemo(() => crypto.randomUUID(), []);

  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage("assistant", "Hola. Soy el asistente virtual. ¿En que puedo ayudarte?"),
  ]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const message = draft.trim();
    if (!message || isSending) return;

    const userMessage = createMessage("user", message);
    const history = [...messages, userMessage];

    setMessages(history);
    setDraft("");
    setIsSending(true);
    const replyDelay = sleep(getReplyDelayMs());

    try {
      const reply = await sendChatMessage({
        sessionId,
        message,
        history,
      });
      await replyDelay;
      setMessages((prev) => [...prev, createMessage("assistant", reply)]);
    } catch (error) {
      await replyDelay;
      const detail = error instanceof Error ? error.message : "Error desconocido";
      console.error("[chat] error:", error);
      setMessages((prev) => [
        ...prev,
        createMessage(
          "assistant",
          import.meta.env.DEV
            ? `No se pudo contactar con el webhook. ${detail}`
            : "No se pudo procesar tu mensaje en este momento.",
        ),
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {isOpen && (
        <section className="fixed bottom-24 right-4 z-[120] w-[calc(100vw-2rem)] max-w-sm rounded-xl border border-border bg-background shadow-2xl">
          <header className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="font-display text-lg font-semibold text-foreground">Asistente</p>
              <p className="text-xs text-muted-foreground">Canal de consulta inicial</p>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Cerrar chat">
              <X className="h-4 w-4" />
            </Button>
          </header>

          <div className="max-h-80 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((item) => (
              <article
                key={item.id}
                className={`max-w-[88%] rounded-lg px-3 py-2 text-sm ${
                  item.role === "assistant"
                    ? "bg-muted text-foreground"
                    : "ml-auto bg-primary text-primary-foreground"
                }`}
              >
                {item.content}
              </article>
            ))}
            {isSending && (
              <article className="max-w-[88%] rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="chat-loader" aria-hidden="true">
                    <span className="chat-loader-dot chat-loader-dot-1" />
                    <span className="chat-loader-dot chat-loader-dot-2" />
                    <span className="chat-loader-dot chat-loader-dot-3" />
                  </div>
                  <span>Escribiendo...</span>
                </div>
              </article>
            )}
          </div>

          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-border p-3">
            <Input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Escribe tu consulta..."
              disabled={isSending}
            />
            <Button type="submit" size="icon" disabled={isSending || !draft.trim()} aria-label="Enviar mensaje">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </section>
      )}

      <Button
        type="button"
        size="lg"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-4 right-4 z-[120] rounded-full px-5 shadow-xl"
      >
        <MessageCircle className="h-5 w-5" />
        ¿Que podemos hacer por ti?
      </Button>
    </>
  );
};

export default ChatWidget;
