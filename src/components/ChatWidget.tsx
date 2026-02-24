import { FormEvent, useMemo, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { chatGateway, type ChatMessage } from "@/lib/chat";

const createMessage = (role: ChatMessage["role"], content: string): ChatMessage => ({
  id: crypto.randomUUID(),
  role,
  content,
  createdAt: new Date().toISOString(),
});

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage("assistant", "Hola, soy el asistente virtual. ¿En que puedo ayudarte?"),
  ]);

  const sessionId = useMemo(() => crypto.randomUUID(), []);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const trimmed = draft.trim();
    if (!trimmed || pending) return;

    const userMessage = createMessage("user", trimmed);
    const history = [...messages, userMessage];

    setMessages(history);
    setDraft("");
    setPending(true);

    try {
      const reply = await chatGateway.sendMessage({
        sessionId,
        message: trimmed,
        history,
      });
      setMessages((prev) => [...prev, createMessage("assistant", reply)]);
    } catch {
      setMessages((prev) => [
        ...prev,
        createMessage("assistant", "No se pudo obtener respuesta en este momento."),
      ]);
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      {open && (
        <section className="fixed bottom-24 right-4 z-[120] w-[calc(100vw-2rem)] max-w-sm rounded-xl border border-border bg-background shadow-2xl">
          <header className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="font-display text-lg font-semibold text-foreground">Asistente</p>
              <p className="text-xs text-muted-foreground">Chat de orientacion inicial</p>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Cerrar chat">
              <X className="h-4 w-4" />
            </Button>
          </header>

          <div className="max-h-80 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[88%] rounded-lg px-3 py-2 text-sm ${
                  message.role === "assistant"
                    ? "bg-muted text-foreground"
                    : "ml-auto bg-primary text-primary-foreground"
                }`}
              >
                {message.content}
              </div>
            ))}
            {pending && (
              <div className="max-w-[88%] rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
                Escribiendo...
              </div>
            )}
          </div>

          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-border p-3">
            <Input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Escribe tu consulta..."
              disabled={pending}
            />
            <Button type="submit" size="icon" disabled={pending || draft.trim().length === 0} aria-label="Enviar">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </section>
      )}

      <Button
        type="button"
        size="lg"
        className="fixed bottom-4 right-4 z-[120] rounded-full px-5 shadow-xl"
        onClick={() => setOpen((prev) => !prev)}
      >
        <MessageCircle className="h-5 w-5" />
        ¿Que podemos hacer por ti?
      </Button>
    </>
  );
};

export default ChatWidget;
