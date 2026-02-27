import {
  IconArrowRight,
  IconBrandInstagram,
  IconFlower,
  IconHandFinger,
  IconHeart,
  IconLeaf,
  IconNeedle,
  IconPalette,
  IconPhoto,
  IconSparkles,
  IconStars,
} from "@tabler/icons-react";
import Link from "next/link";

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
  return (
    <main className="bg-background text-foreground">
      <section
        id="inicio"
        className="relative overflow-hidden min-h-screen flex justify-center items-center"
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
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-5 sm:pt-30">
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
        className="scroll-mt-24 border-t border-border bg-card/40"
      >
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 sm:grid-cols-[1.1fr_0.9fr]">
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
            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <IconBrandInstagram className="h-4 w-4" stroke={1.6} />
              Siga o ateliê e acompanhe as novidades.
            </div>
          </div>
        </div>
      </section>

      <section
        id="processo"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16"
      >
        <div className="mb-8 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <IconSparkles className="h-4 w-4" stroke={1.6} />
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
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                  <Icon className="h-5 w-5" stroke={1.6} />
                </div>
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="vitrine"
        className="scroll-mt-24 border-t border-border bg-card/40"
      >
        <div className="mx-auto max-w-5xl px-6 py-16">
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
            {gallery.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-background p-5 text-sm text-muted-foreground shadow-sm"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent">
                  <IconFlower className="h-4 w-4" stroke={1.6} />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="depoimentos"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16"
      >
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
      </section>

      <section
        id="encomendas"
        className="scroll-mt-24 border-t border-border bg-card/40"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <IconSparkles className="h-4 w-4" stroke={1.6} />
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
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <IconFlower className="h-4 w-4" stroke={1.6} />
            Ateliê da Gisa · Macramê artesanal
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
              <IconBrandInstagram className="h-4 w-4" stroke={1.6} />
              Instagram
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
              <IconHeart className="h-4 w-4" stroke={1.6} />
              Feito com carinho
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
