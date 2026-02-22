import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, LogOut, Eye, EyeOff, ImagePlus } from "lucide-react";
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
import {
  addGalleryImage,
  deleteGalleryImage,
  getGalleryImages,
  type GalleryImage,
} from "@/lib/gallery";

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

const fileToDataUrl = (file: File) => new Promise<string>((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(String(reader.result));
  reader.onerror = () => reject(new Error("No se pudo leer el archivo"));
  reader.readAsDataURL(file);
});

const Admin = () => {
  const [authed, setAuthed] = useState(isAdminAuthenticated());
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newImageAlt, setNewImageAlt] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (authed) {
      setPosts(getPosts());
      setGallery(getGalleryImages());
    }
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

  const handleAddImageByUrl = (e: React.FormEvent) => {
    e.preventDefault();
    const url = newImageUrl.trim();
    if (!url) return;

    addGalleryImage({
      id: Date.now().toString(),
      url,
      alt: newImageAlt.trim() || "Imagen de la clínica",
    });

    setGallery(getGalleryImages());
    setNewImageUrl("");
    setNewImageAlt("");
    toast({ title: "Imagen añadida a la galería" });
  };

  const handleAddImageByFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const dataUrl = await fileToDataUrl(file);
      addGalleryImage({
        id: Date.now().toString(),
        url: dataUrl,
        alt: newImageAlt.trim() || file.name || "Imagen de la clínica",
      });
      setGallery(getGalleryImages());
      setNewImageAlt("");
      toast({ title: "Imagen subida a la galería" });
    } catch {
      toast({ title: "No se pudo subir la imagen", variant: "destructive" });
    } finally {
      e.target.value = "";
    }
  };

  const handleDeleteGalleryImage = (id: string) => {
    deleteGalleryImage(id);
    setGallery(getGalleryImages());
    toast({ title: "Imagen eliminada de la galería" });
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
      <div className="container max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-2xl font-bold text-foreground">Admin Blog y Galería</h1>
          <div className="flex gap-2">
            <Button onClick={() => setEditing({ ...emptyPost })}>
              <Plus className="w-4 h-4 mr-1.5" /> Nuevo artículo
            </Button>
            <Button variant="outline" onClick={() => { adminLogout(); setAuthed(false); }}>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <section className="space-y-3 mb-12">
          <h2 className="font-display text-xl font-bold text-foreground">Artículos del blog</h2>
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
        </section>

        <section className="rounded-xl bg-card border border-border p-6 md:p-8">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">Galería</h2>

          <form onSubmit={handleAddImageByUrl} className="grid gap-3 md:grid-cols-[1fr_1fr_auto] mb-4">
            <Input
              placeholder="URL de imagen"
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
            />
            <Input
              placeholder="Texto alternativo (opcional)"
              value={newImageAlt}
              onChange={(e) => setNewImageAlt(e.target.value)}
            />
            <Button type="submit">
              <Plus className="w-4 h-4 mr-1.5" /> Añadir URL
            </Button>
          </form>

          <div className="flex items-center gap-3 mb-6">
            <Label htmlFor="gallery-file" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border cursor-pointer hover:bg-muted/40 transition-colors">
              <ImagePlus className="w-4 h-4" /> Subir foto
            </Label>
            <Input
              id="gallery-file"
              type="file"
              accept="image/*"
              onChange={handleAddImageByFile}
              className="hidden"
            />
            <p className="text-xs text-muted-foreground">Las imágenes subidas se guardan en este navegador.</p>
          </div>

          {gallery.length === 0 && (
            <p className="text-sm text-muted-foreground">No hay imágenes aún en la galería.</p>
          )}

          {gallery.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.map((img) => (
                <article key={img.id} className="rounded-lg border border-border overflow-hidden bg-background">
                  <img src={img.url} alt={img.alt} className="w-full h-40 object-cover" />
                  <div className="p-3 flex items-center justify-between gap-2">
                    <p className="text-xs text-muted-foreground truncate">{img.alt || "Sin descripción"}</p>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteGalleryImage(img.id)}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Admin;
