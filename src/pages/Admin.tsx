import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, LogOut, Eye, EyeOff } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  getPosts,
  savePost,
  deletePost,
  generateSlug,
  adminLogin,
  isAdminLoggedIn,
  adminLogout,
  type BlogPost,
} from "@/lib/blog";

const emptyPost: BlogPost = {
  id: "",
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "Consejos",
  date: new Date().toISOString().slice(0, 10),
  metaDescription: "",
  published: true,
};

const Admin = () => {
  const [authed, setAuthed] = useState(isAdminLoggedIn());
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);

  const refresh = () => getPosts().then(setPosts);

  useEffect(() => {
    if (authed) refresh();
  }, [authed]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(password)) setAuthed(true);
    else alert("Contraseña incorrecta");
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    const post: BlogPost = {
      ...editing,
      id: editing.id || crypto.randomUUID(),
      slug: editing.slug || generateSlug(editing.title),
    };
    savePost(post);
    setEditing(null);
    refresh();
  };

  const handleDelete = (id: string) => {
    if (!confirm("¿Eliminar este artículo?")) return;
    deletePost(id);
    refresh();
  };

  if (!authed) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-background">
          <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4 p-8 rounded-xl border border-border bg-card">
            <h1 className="font-display text-2xl font-bold text-foreground text-center">Admin</h1>
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="w-full">Entrar</Button>
          </form>
        </main>
        <Footer />
      </>
    );
  }

  if (editing) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background py-16">
          <div className="container max-w-3xl">
            <h1 className="font-display text-2xl font-bold text-foreground mb-8">
              {editing.id ? "Editar artículo" : "Nuevo artículo"}
            </h1>
            <form onSubmit={handleSave} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Título</label>
                <Input
                  value={editing.title}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value, slug: generateSlug(e.target.value) })}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Slug</label>
                <Input value={editing.slug} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Categoría</label>
                  <Input value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Fecha</label>
                  <Input type="date" value={editing.date} onChange={(e) => setEditing({ ...editing, date: e.target.value })} />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Extracto</label>
                <Textarea rows={2} value={editing.excerpt} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Contenido (Markdown básico)</label>
                <Textarea rows={12} value={editing.content} onChange={(e) => setEditing({ ...editing, content: e.target.value })} required />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Meta descripción (SEO)</label>
                <Input value={editing.metaDescription} onChange={(e) => setEditing({ ...editing, metaDescription: e.target.value })} />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="published"
                  checked={editing.published}
                  onChange={(e) => setEditing({ ...editing, published: e.target.checked })}
                  className="accent-primary"
                />
                <label htmlFor="published" className="text-sm text-foreground">Publicado</label>
              </div>
              <div className="flex gap-3 pt-2">
                <Button type="submit">Guardar</Button>
                <Button type="button" variant="outline" onClick={() => setEditing(null)}>Cancelar</Button>
              </div>
            </form>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background py-16">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Gestión del Blog
            </h1>
            <div className="flex gap-2">
              <Button onClick={() => setEditing({ ...emptyPost })}>
                <Plus className="w-4 h-4 mr-1.5" /> Nuevo
              </Button>
              <Button variant="ghost" size="icon" onClick={() => { adminLogout(); setAuthed(false); }}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {posts.length === 0 && (
            <p className="text-muted-foreground text-center py-12">No hay artículos. Crea el primero.</p>
          )}

          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-4"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {post.published ? (
                      <Eye className="w-3.5 h-3.5 text-primary shrink-0" />
                    ) : (
                      <EyeOff className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                    )}
                    <span className="font-medium text-foreground truncate">{post.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {post.date} · {post.category}
                  </p>
                </div>
                <div className="flex gap-1 shrink-0">
                  <Button variant="ghost" size="icon" onClick={() => setEditing({ ...post })}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Admin;
