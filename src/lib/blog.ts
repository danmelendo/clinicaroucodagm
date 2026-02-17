export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  metaDescription: string;
  published: boolean;
}

const STORAGE_KEY = "rouco_blog_posts";

const defaultPosts: BlogPost[] = [
  {
    id: "1",
    title: "Fisioterapia deportiva en San Fernando de Henares: cómo prevenir y tratar lesiones",
    slug: "fisioterapia-deportiva-san-fernando-henares",
    excerpt:
      "El deporte es salud, pero también exige al cuerpo un esfuerzo físico constante. Ya seas deportista amateur, profesional o simplemente alguien que entrena regularmente, es probable que en algún momento hayas sufrido una lesión...",
    content: `El deporte es salud, pero también exige al cuerpo un esfuerzo físico constante. Ya seas deportista amateur, profesional o simplemente alguien que entrena regularmente, es probable que en algún momento hayas sufrido una lesión.

En Rouco Fisioterapia, tu clínica de fisioterapia en San Fernando de Henares, estamos especializados en el tratamiento y la prevención de lesiones deportivas. A continuación, te contamos cómo podemos ayudarte.

## ¿Qué es la fisioterapia deportiva?

La fisioterapia deportiva es una rama especializada que se centra en la prevención, diagnóstico y tratamiento de lesiones relacionadas con la actividad física y el deporte. No se limita a deportistas de élite: cualquier persona activa puede beneficiarse de ella.

## Lesiones más comunes

- **Esguinces y distensiones musculares**: Muy frecuentes en deportes de impacto o cambios de dirección.
- **Tendinopatías**: Inflamación o degeneración de los tendones, común en corredores y deportistas de raqueta.
- **Fascitis plantar**: Dolor en la planta del pie, habitual en corredores.
- **Dolor de espalda**: Relacionado con sobrecargas o malas posturas durante el entrenamiento.

## Nuestro enfoque en Rouco Fisioterapia

Combinamos técnicas avanzadas como la **punción seca**, **neuromodulación**, **EPTE** y **ejercicio terapéutico** para ofrecer un tratamiento integral. Además, utilizamos **ecografía** para un diagnóstico preciso.

## Prevención: la mejor estrategia

No esperes a lesionarte. Un programa de prevención personalizado puede ayudarte a:

1. Mejorar tu rendimiento deportivo
2. Reducir el riesgo de lesiones
3. Optimizar tu recuperación entre entrenamientos

Si buscas una **clínica de fisioterapia deportiva en San Fernando de Henares**, no dudes en contactarnos. Tu salud es nuestra prioridad.`,
    category: "Terapias",
    date: "2025-05-26",
    metaDescription:
      "Fisioterapia deportiva en San Fernando de Henares. Prevención y tratamiento de lesiones deportivas con técnicas avanzadas en Rouco Fisioterapia.",
    published: true,
  },
];

export function getPosts(): BlogPost[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPosts));
    return defaultPosts;
  }
  return JSON.parse(stored);
}

export function getPublishedPosts(): BlogPost[] {
  return getPosts().filter((p) => p.published);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function savePost(post: BlogPost): void {
  const posts = getPosts();
  const idx = posts.findIndex((p) => p.id === post.id);
  if (idx >= 0) {
    posts[idx] = post;
  } else {
    posts.push(post);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function deletePost(id: string): void {
  const posts = getPosts().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const ADMIN_KEY = "rouco_admin_auth";
const ADMIN_PASSWORD = "rouco2024";

export function isAdminAuthenticated(): boolean {
  return sessionStorage.getItem(ADMIN_KEY) === "true";
}

export function adminLogin(password: string): boolean {
  if (password === ADMIN_PASSWORD) {
    sessionStorage.setItem(ADMIN_KEY, "true");
    return true;
  }
  return false;
}

export function adminLogout(): void {
  sessionStorage.removeItem(ADMIN_KEY);
}
