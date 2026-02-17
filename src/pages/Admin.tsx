import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, LogOut, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  BlogPost,
  getPosts,
  savePost,
  deletePost,
  generateSlug,
  isAdminAuthenticated,
  adminLogin,
  adminLogout,
} from "@/lib/blog";

const emptyPost: BlogPost = {
  id: "",
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "Terapias",
  date: new Date().toISOString().split("T")[0],
  metaDescription: "",
  published: false,
};

const Admin = () => {
  const [authed, setAuthed] = useState(isAdminAuthenticated());
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (authed) setPosts(getPosts());
  }, [authed]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(password)) {
      setAuthed(true);
    } else {
      toast({ title: "Contraseña incorrecta", variant: "destructive" });
    }
    setPassword("");
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    const post: BlogPost = {
      ...editing,
      id: editing.id || Date.now().toString(),
      slug: editing.slug || generateSlug(editing.title),
    };
    savePost(post);
    setPosts(getPosts());
    setEditing(null);
    toast({ title: "Artículo guardado" });
  };

  const handleDelete = (id: string) => {
    deletePost(id);
    setPosts(getPosts());
    toast({ title: "Artículo eliminado" });
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4 p-8 bg-card rounded-xl border border-border">
          <h1 className="font-display text-2xl font-bold text-foreground text-center">Admin Blog</h1>
          <div>
            <Label htmlFor="pwd">Contraseña</Label>
            <Input id="pwd" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit" className="w-full">Entrar</Button>
        </form>
      </div>
    );
  }

  if (editing) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container max-w-3xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-display text-2xl font-bold text-foreground">
              {editing.id ? "Editar artículo" : "Nuevo artículo"}
            </h1>
            <Button variant="outline" onClick={() => setEditing(null)}>Cancelar</Button>
          </div>
          <form onSubmit={handleSave} className="space-y-5">
            <div>
              <Label>Título</Label>
              <Input value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value, slug: generateSlug(e.target.value) })} required />
            </div>
            <div>
              <Label>Slug</Label>
              <Input value={editing.slug} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Categoría</Label>
                <Input value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value })} />
              </div>
              <div>
                <Label>Fecha</Label>
                <Input type="date" value={editing.date} onChange={(e) => setEditing({ ...editing, date: e.target.value })} />
              </div>
            </div>
            <div>
              <Label>Meta descripción (SEO)</Label>
              <Input value={editing.metaDescription} onChange={(e) => setEditing({ ...editing, metaDescription: e.target.value })} maxLength={160} />
              <p className="text-xs text-muted-foreground mt-1">{editing.metaDescription.length}/160</p>
            </div>
            <div>
              <Label>Extracto</Label>
              <Textarea value={editing.excerpt} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })} rows={3} />
            </div>
            <div>
              <Label>Contenido (Markdown básico: ## títulos, **negrita**, listas con - o 1.)</Label>
              <Textarea value={editing.content} onChange={(e) => setEditing({ ...editing, content: e.target.value })} rows={16} className="font-mono text-sm" />
            </div>
            <div className="flex items-center gap-4">
              <Button type="submit">Guardar</Button>
              <Button
                type="button"
                variant={editing.published ? "secondary" : "outline"}
                onClick={() => setEditing({ ...editing, published: !editing.published })}
              >
                {editing.published ? <><Eye className="w-4 h-4 mr-1.5" /> Publicado</> : <><EyeOff className="w-4 h-4 mr-1.5" /> Borrador</>}
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-2xl font-bold text-foreground">Admin Blog</h1>
          <div className="flex gap-2">
            <Button onClick={() => setEditing({ ...emptyPost })}>
              <Plus className="w-4 h-4 mr-1.5" /> Nuevo artículo
            </Button>
            <Button variant="outline" onClick={() => { adminLogout(); setAuthed(false); }}>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.id} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
              <div>
                <h3 className="font-medium text-foreground">{post.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {post.date} · {post.category} · {post.published ? "Publicado" : "Borrador"}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => setEditing(post)}>
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)}>
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
