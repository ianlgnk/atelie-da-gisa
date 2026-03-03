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
} from "@tabler/icons-react";
import {
  AnimatePresence,
  type Easing,
  motion,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import heroImage from "@/assets/hero.jpg";
import vitrine01 from "@/assets/vitrine-01.jpg";
import vitrine02 from "@/assets/vitrine-02.jpg";
import vitrine03 from "@/assets/vitrine-03.jpg";
import vitrine04 from "@/assets/vitrine-04.jpg";
import vitrine05 from "@/assets/vitrine-05.jpg";
import vitrine06 from "@/assets/vitrine-06.jpg";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { VitrineLightbox } from "@/components/vitrine-lightbox";

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
    src: vitrine01.src,
    alt: "Macramê pendurado na parede",
  },
  {
    src: vitrine02.src,
    alt: "Macramê suporte de plantas pendentes",
  },
  {
    src: vitrine03.src,
    alt: "Painel de macramê na parede",
  },
  {
    src: vitrine04.src,
    alt: "Suporte de plantas em macramê",
  },
  {
    src: vitrine05.src,
    alt: "Macramê envolvido em potes de vidro",
  },
  {
    src: vitrine06.src,
    alt: "Chaveiro em macramê",
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
  {
    name: "Clara Monteiro",
    text: "A peça chegou impecável. O acabamento é lindo e combinou com a sala.",
  },
  {
    name: "Lucas e Fernanda",
    text: "Pedimos um suporte de plantas e ficou maravilhoso. Atendimento atencioso.",
  },
  {
    name: "Bianca Ribeiro",
    text: "O macramê trouxe um charme especial para o quarto. Super recomendo.",
  },
  {
    name: "Rafael Cardoso",
    text: "A entrega foi rápida e a peça é ainda mais bonita ao vivo.",
  },
  {
    name: "Helena Duarte",
    text: "Cada detalhe é pensado com carinho. Dá pra sentir o cuidado no trabalho.",
  },
  {
    name: "Joana Martins",
    text: "Ficou exatamente como eu imaginei. Já quero encomendar outra peça.",
  },
];

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const reduceEffects = shouldReduceMotion || isMobile;
  const easeOut: Easing = [0.16, 1, 0.3, 1];
  const viewportSection = React.useMemo(
    () => (isMobile ? { amount: 0.15 } : { amount: 0.35 }),
    [isMobile],
  );
  const viewportTight = React.useMemo(
    () => (isMobile ? { amount: 0.05 } : { amount: 0.3 }),
    [isMobile],
  );
  const sectionVariants = React.useMemo(
    () => ({
      hidden: {
        opacity: 0,
        scale: reduceEffects ? 1 : 0.985,
        filter: reduceEffects ? "none" : "blur(6px)",
      },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: isMobile ? 0.4 : 0.65,
          ease: easeOut,
        },
      },
    }),
    [easeOut, isMobile, reduceEffects],
  );
  const listVariants = React.useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: isMobile ? 0.06 : 0.12,
          delayChildren: isMobile ? 0 : 0.05,
        },
      },
    }),
    [isMobile],
  );
  const itemVariants = React.useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: reduceEffects ? 0 : 12,
        scale: reduceEffects ? 1 : 0.98,
        filter: reduceEffects ? "none" : "blur(4px)",
      },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: isMobile ? 0.35 : 0.5, ease: easeOut },
      },
    }),
    [easeOut, isMobile, reduceEffects],
  );
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <main className="bg-background text-foreground">
      <motion.section
        id="inicio"
        className="relative flex min-h-svh scroll-mt-0 sm:scroll-mt-10 items-center justify-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={viewportSection}
      >
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Macramê em destaque"
            fill
            priority
            className="object-cover"
          />
        </div>
        <motion.div
          className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-30 pb-15"
          variants={listVariants}
        >
          <motion.div className="flex flex-col gap-4" variants={listVariants}>
            <motion.h1
              className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl text-white"
              variants={itemVariants}
            >
              Peças de macramê que trazem calma, beleza e afeto para o seu lar.
            </motion.h1>
            <motion.p
              className="max-w-2xl text-base leading-relaxed sm:text-lg text-white"
              variants={itemVariants}
            >
              No coração do ateliê, Dona Gisele transforma fios em arte. Cada
              peça é feita com tempo e carinho, para quem valoriza o artesanal e
              o aconchego.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={itemVariants}
            >
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
            </motion.div>
          </motion.div>
          {/* <div className="grid gap-4 sm:grid-cols-3">
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
          </div> */}
        </motion.div>
      </motion.section>

      <motion.section
        id="sobre"
        className="border-t border-border bg-card/40 space-y-15 scroll-mt-0 sm:scroll-mt-10 min-h-svh"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={viewportTight}
      >
        <motion.div
          className="mx-auto grid max-w-6xl gap-10 px-6 pt-25 lg:grid-cols-[0.85fr_1.15fr]"
          variants={listVariants}
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <IconSparkles className="h-4 w-4" stroke={1.6} />
              Sobre o ateliê
            </div>
            <h2 className="text-2xl font-semibold tracking-tight lg:text-3xl">
              Uma história de família, fios e cuidado em cada detalhe.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
              O Ateliê da Gisa nasceu do amor pelo feito à mão. Dona Gisele cria
              macramês que transformam ambientes com textura, leveza e
              personalidade.
            </p>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
              <IconPhoto className="h-5 w-5" stroke={1.6} />
              Quer ver o processo? Em breve teremos bastidores e fotos de cada
              criação.
            </div>
          </motion.div>
          <motion.div
            className="rounded-3xl border border-border bg-background p-6 shadow-sm"
            variants={itemVariants}
          >
            <div className="lg:grid lg:grid-cols-[1fr_auto] lg:items-start lg:gap-6">
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
              <div className="mt-4 lg:mt-0 lg:row-span-2 lg:col-start-2 lg:w-56">
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-border bg-muted/40">
                  <div className="absolute inset-0 grid place-items-center text-muted-foreground">
                    <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest">
                      <IconPhoto className="h-6 w-6" stroke={1.6} />
                      Foto da Dona Gisele
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  “Cada peça é pensada para contar uma história. Eu gosto de
                  imaginar onde ela vai ficar e como vai trazer aconchego para o
                  dia a dia.”
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
          </motion.div>
        </motion.div>
        <motion.div
          className="mx-auto max-w-6xl px-6 pb-25"
          variants={listVariants}
        >
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
          <motion.div
            className="grid gap-4 sm:grid-cols-3"
            variants={listVariants}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="group relative rounded-2xl border border-border bg-card p-5 text-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-foreground hover:text-background hover:shadow-lg"
                  variants={itemVariants}
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
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        id="vitrine"
        className="border-t border-border bg-card scroll-mt-0 sm:scroll-mt-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={viewportTight}
      >
        <motion.div
          className="mx-auto max-w-6xl px-6 py-25"
          variants={listVariants}
        >
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
          <motion.div
            className="grid gap-4 sm:grid-cols-3"
            variants={listVariants}
          >
            {vitrineImages.map((image, index) => (
              <motion.button
                key={image.src}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background text-left shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                variants={itemVariants}
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
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        id="depoimentos"
        className="border-t border-border bg-card scroll-mt-0 sm:scroll-mt-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={viewportTight}
      >
        <motion.div
          className="mx-auto max-w-6xl px-6 py-25"
          variants={listVariants}
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
          <motion.div variants={itemVariants}>
            <TestimonialsCarousel items={testimonials} />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        id="encomendas"
        className="border-t border-border bg-card scroll-mt-0 sm:scroll-mt-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={viewportTight}
      >
        <motion.div
          className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-25 sm:flex-row sm:items-center sm:justify-between min-h-[80dvh]"
          variants={listVariants}
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <IconCubeSend className="h-8 w-8" stroke={1.6} />
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
        </motion.div>
      </motion.section>

      <motion.footer
        className="border-t border-border bg-background"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.45 }}
      >
        <motion.div
          className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
          variants={listVariants}
        >
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
        </motion.div>
      </motion.footer>

      <AnimatePresence>
        {selectedIndex !== null && (
          <VitrineLightbox
            images={vitrineImages}
            initialIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
