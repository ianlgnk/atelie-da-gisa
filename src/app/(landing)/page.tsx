"use client";

import {
  IconArrowRight,
  IconBrandInstagram,
  IconCubeSend,
  IconFlower,
  IconHandFinger,
  IconHeart,
  IconHeartHandshake,
  IconLeaf,
  IconNeedle,
  IconPalette,
  IconPhoto,
  IconSparkles,
  IconStars,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const features = [
  {
    title: "Feito à mão",
    description:
      "Cada peça é criada ponto a ponto, com atenção ao ritmo e ao acabamento que só o artesanal oferece.",
    icon: IconHandFinger,
  },
  {
    title: "Materiais escolhidos",
    description:
      "Fios naturais, texturas macias e cores calmas para trazer leveza ao ambiente.",
    icon: IconLeaf,
  },
  {
    title: "Design afetivo",
    description:
      "Macramê pensado para histórias e memórias, com detalhes que deixam a casa mais acolhedora.",
    icon: IconHeart,
  },
];

const steps = [
  {
    title: "Inspiração",
    description:
      "A ideia nasce de uma conversa e do clima que você quer sentir no seu espaço.",
    icon: IconSparkles,
  },
  {
    title: "Criação",
    description: "A Gisa desenha e combina fibras para cada peça ficar única.",
    icon: IconPalette,
  },
  {
    title: "Acabamento",
    description:
      "Tudo é finalizado com calma, para garantir durabilidade e beleza.",
    icon: IconNeedle,
  },
];

const gallery = [
  "Painéis para sala",
  "Suportes de plantas",
  "Porta-guardanapos",
  "Cestos e bandejas",
  "Detalhes para eventos",
  "Peças sob medida",
];

const vitrineImages = [
  {
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80",
    alt: "Macramê pendente",
  },
  {
    src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80",
    alt: "Suporte de plantas em macramê",
  },
  {
    src: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?auto=format&fit=crop&w=1400&q=80",
    alt: "Painel decorativo em macramê",
  },
  {
    src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1400&q=80",
    alt: "Detalhes artesanais",
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    alt: "Ambiente com peças em macramê",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    alt: "Texturas e fibras naturais",
  },
];

const testimonials = [
  {
    name: "Maria de Lourdes",
    text: "Recebi o painel e fiquei encantada. A textura é linda e trouxe vida para a sala.",
  },
  {
    name: "Paulo e Renata",
    text: "Encomendamos para o quarto do bebê. Ficou delicado e feito com muito cuidado.",
  },
  {
    name: "Sofia Martins",
    text: "O atendimento foi carinhoso e a peça chegou perfeita. Vou encomendar mais.",
  },
];

export default function HomePage() {
  const [selectedImage, setSelectedImage] = React.useState<
    (typeof vitrineImages)[number] | null
  >(null);

  React.useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <main className="bg-background text-foreground">
      <section
        id="inicio"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source
              src="https://videos.pexels.com/video-files/33351040/14200908_3840_2160_24fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-30 pb-15">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl text-white">
              Peças de macramê que trazem calma, beleza e afeto para o seu lar.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed sm:text-lg text-white">
              No coração do ateliê, Dona Gisele transforma fios em arte. Cada
              peça é feita com tempo e carinho, para quem valoriza o artesanal e
              o aconchego.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/vitrine"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:opacity-90"
              >
                Ver vitrine
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#sobre"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent"
              >
                Conheça o ateliê
                <IconStars className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group relative rounded-2xl border border-border bg-card p-5 text-foreground shadow-sm transition-all  ease-out hover:-translate-y-1 hover:bg-foreground hover:text-background hover:shadow-lg"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent transition-colors  group-hover:bg-background/20">
                    <Icon
                      className="h-5 w-5 text-foreground transition-colors group-hover:text-background"
                      stroke={1.6}
                    />
                  </div>
                  <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-background">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-background/80">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="border-t border-border bg-card/40 space-y-15"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-6 pt-25 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <IconSparkles className="h-4 w-4" stroke={1.6} />
              Sobre o ateliê
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Uma história de família, fios e cuidado em cada detalhe.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              O Ateliê da Gisa nasceu do amor pelo feito à mão. Dona Gisele cria
              macramês que transformam ambientes com textura, leveza e
              personalidade.
            </p>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
              <IconPhoto className="h-5 w-5" stroke={1.6} />
              Quer ver o processo? Em breve teremos bastidores e fotos de cada
              criação.
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-accent p-3">
                <IconHeart className="h-6 w-6" stroke={1.6} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Quem faz tudo acontecer
                </p>
                <h3 className="text-lg font-semibold">Dona Gisele</h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              “Cada peça é pensada para contar uma história. Eu gosto de
              imaginar onde ela vai ficar e como vai trazer aconchego para o dia
              a dia.”
            </p>
            <Link
              href="https://www.instagram.com/ateliedagisa.l/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <IconBrandInstagram className="h-4 w-4" stroke={1.6} />
              Siga o ateliê e acompanhe as novidades.
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-25">
          <div className="mb-8 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <IconHeartHandshake className="h-4 w-4" stroke={1.6} />
              Como funciona
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Do cuidado à entrega.
            </h2>
            <p className="text-base text-muted-foreground">
              Um fluxo simples, pensado para você se sentir acompanhada em cada
              etapa.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group relative rounded-2xl border border-border bg-card p-5 text-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-foreground hover:text-background hover:shadow-lg"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent transition-colors duration-300 group-hover:bg-background/20">
                    <Icon
                      className="h-5 w-5 text-foreground transition-colors duration-300 group-hover:text-background"
                      stroke={1.6}
                    />
                  </div>
                  <h3 className="text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-background">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-background/80">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="vitrine" className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-25">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <IconPhoto className="h-4 w-4" stroke={1.6} />
                Vitrine
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Peças que já encantam.
              </h2>
            </div>
            <Link
              href="/vitrine"
              className="hidden items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground sm:inline-flex"
            >
              Ver tudo
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {vitrineImages.map((image) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background text-left shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <div className="flex items-center gap-2 border-t border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                  <IconFlower className="h-4 w-4" stroke={1.6} />
                  {image.alt}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-25">
          <div className="mb-8 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <IconStars className="h-4 w-4" stroke={1.6} />
              Depoimentos
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Quem recebe, se apaixona.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground shadow-sm"
              >
                <p className="leading-relaxed">“{testimonial.text}”</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground">
                  <IconHeart className="h-4 w-4" stroke={1.6} />
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="encomendas" className="border-t border-border bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-25 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <IconCubeSend className="h-4 w-4" stroke={1.6} />
              Encomendas
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Pronta para escolher sua peça especial?
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Fale com a gente para tirar dúvidas, pedir cores personalizadas ou
              reservar sua próxima criação.
            </p>
          </div>
          <Link
            href="/vitrine"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:opacity-90"
          >
            Quero encomendar
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <IconFlower className="h-4 w-4" stroke={1.6} />
            Ateliê da Gisa · Macramê artesanal
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://www.instagram.com/ateliedagisa.l/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 hover:scale-105 hover:bg-accent transition-all"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#feda75,#fa7e1e_35%,#d62976_60%,#962fbf_80%,#4f5bd5_100%)]">
                <IconBrandInstagram
                  className="h-3.5 w-3.5 text-white"
                  stroke={1.6}
                />
              </span>
              Instagram
            </Link>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
              <IconHeart
                className="h-4 w-4 fill-red-500 stroke-red-500"
                stroke={1.6}
              />
              Feito com carinho
            </span>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <div className="relative max-h-full w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] w-full rounded-2xl object-contain shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur transition hover:bg-black/80 cursor-pointer"
            >
              <IconX />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
