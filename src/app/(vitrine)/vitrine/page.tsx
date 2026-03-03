"use client";

import {
  IconBrandWhatsapp,
  IconChevronLeft,
  IconHeart,
  IconLeaf,
  IconMoon,
  IconPhoto,
  IconSparkles,
  IconSun,
} from "@tabler/icons-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import * as React from "react";

import vitrine01 from "@/assets/vitrine-01.jpg";
import vitrine02 from "@/assets/vitrine-02.jpg";
import vitrine03 from "@/assets/vitrine-03.jpg";
import vitrine04 from "@/assets/vitrine-04.jpg";
import vitrine05 from "@/assets/vitrine-05.jpg";
import vitrine06 from "@/assets/vitrine-06.jpg";
import { VitrineLightbox } from "@/components/vitrine-lightbox";

const gallery = [
  {
    src: vitrine01,
    alt: "Painel de macramê em sala clara",
    ratio: "aspect-[4/5]",
  },
  {
    src: vitrine02,
    alt: "Suporte de plantas em macramê",
    ratio: "aspect-[4/3]",
  },
  {
    src: vitrine03,
    alt: "Painel grande em parede neutra",
    ratio: "aspect-[3/4]",
  },
  { src: vitrine04, alt: "Suporte duplo com vasos", ratio: "aspect-[1/1]" },
  { src: vitrine05, alt: "Detalhes em fibras naturais", ratio: "aspect-[4/3]" },
  {
    src: vitrine06,
    alt: "Chaveiro artesanal em macramê",
    ratio: "aspect-[3/5]",
  },
  { src: vitrine01, alt: "Painel vertical com franjas", ratio: "aspect-[2/3]" },
  {
    src: vitrine02,
    alt: "Arranjo com plantas suspensas",
    ratio: "aspect-[5/4]",
  },
  {
    src: vitrine03,
    alt: "Macramê decorativo para hall",
    ratio: "aspect-[4/6]",
  },
  {
    src: vitrine04,
    alt: "Suporte único com vaso de cerâmica",
    ratio: "aspect-[4/3]",
  },
  { src: vitrine05, alt: "Textura de nós e tramas", ratio: "aspect-[3/4]" },
  {
    src: vitrine06,
    alt: "Detalhes delicados em fio cru",
    ratio: "aspect-[4/5]",
  },
  {
    src: vitrine01,
    alt: "Composição para sala aconchegante",
    ratio: "aspect-[4/6]",
  },
  {
    src: vitrine02,
    alt: "Conjunto de suportes em alturas diferentes",
    ratio: "aspect-[4/3]",
  },
  {
    src: vitrine03,
    alt: "Painel com desenho geométrico",
    ratio: "aspect-[5/6]",
  },
  { src: vitrine04, alt: "Macramê com vasos pequenos", ratio: "aspect-[1/1]" },
  { src: vitrine05, alt: "Fibras naturais em close", ratio: "aspect-[4/3]" },
  { src: vitrine06, alt: "Peça pequena para presente", ratio: "aspect-[3/4]" },
];

const lightboxImages = gallery.map((item) => ({
  src: item.src.src,
  alt: item.alt,
}));

export default function VitrinePage() {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const isDark = (resolvedTheme ?? theme) === "dark";
  const [isMobile, setIsMobile] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const fadeUp = React.useMemo(
    () => ({
      hidden: { opacity: 0, y: shouldReduceMotion || isMobile ? 0 : 8 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: isMobile ? 0.28 : 0.45, ease: [0.16, 1, 0.3, 1] },
      },
    }),
    [shouldReduceMotion, isMobile],
  );
  const fadeLeft = React.useMemo(
    () => ({
      hidden: { opacity: 0, x: shouldReduceMotion || isMobile ? 0 : -10 },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration: isMobile ? 0.28 : 0.45, ease: [0.16, 1, 0.3, 1] },
      },
    }),
    [shouldReduceMotion, isMobile],
  );
  const fadeRight = React.useMemo(
    () => ({
      hidden: { opacity: 0, x: shouldReduceMotion || isMobile ? 0 : 10 },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration: isMobile ? 0.28 : 0.45, ease: [0.16, 1, 0.3, 1] },
      },
    }),
    [shouldReduceMotion, isMobile],
  );
  const gridItem = React.useMemo(
    () => ({
      hidden: {
        opacity: 0,
        scale: shouldReduceMotion || isMobile ? 1 : 0.985,
        filter: shouldReduceMotion || isMobile ? "none" : "blur(6px)",
      },
      show: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: isMobile ? 0.3 : 0.5, ease: [0.16, 1, 0.3, 1] },
      },
    }),
    [shouldReduceMotion, isMobile],
  );
  return (
    <main className="min-h-svh bg-background text-foreground">
      <header className="relative overflow-hidden border-b border-border bg-background/90 backdrop-blur">
        <div className="pointer-events-none absolute inset-0" />
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10">
          <motion.div
            className="flex flex-wrap items-center justify-between gap-4"
            variants={fadeLeft}
            initial="hidden"
            animate="show"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  <IconSparkles className="h-3.5 w-3.5" />
                  Vitrine
                </div>
                <button
                  type="button"
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                  aria-label="Alternar tema"
                >
                  {isDark ? (
                    <IconSun className="h-4 w-4" />
                  ) : (
                    <IconMoon className="h-4 w-4" />
                  )}
                </button>
              </div>
              <h1 className="mt-3 flex flex-wrap items-center gap-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Galeria completa
                <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card/70 px-2 py-1 text-xs font-semibold text-muted-foreground">
                  <IconPhoto className="h-3.5 w-3.5" />
                  18 fotos
                </span>
              </h1>
            </div>
            <Link
              href="/"
              className="ml-auto inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              <IconChevronLeft className="h-4 w-4" />
              Voltar ao início
            </Link>
          </motion.div>
          <motion.div
            className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
            variants={fadeRight}
            initial="hidden"
            animate="show"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200">
              <IconLeaf className="h-3.5 w-3.5" />
              Fibras naturais
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-rose-50 px-3 py-1 text-rose-700 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-200">
              <IconHeart className="h-3.5 w-3.5" />
              Feito com carinho
            </span>
          </motion.div>
          <motion.p
            className="max-w-2xl text-sm text-muted-foreground sm:text-base"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Uma seleção ampla de peças e detalhes do ateliê. Esta coleção é
            provisória, mas já mostra texturas, padrões e variações.
          </motion.p>
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="pointer-events-none absolute inset-0 -z-10">
          {[
            { left: "4%", top: "6%", size: "h-6 w-6", rotate: "rotate-6" },
            { left: "18%", top: "14%", size: "h-8 w-8", rotate: "-rotate-12" },
            { left: "32%", top: "4%", size: "h-7 w-7", rotate: "rotate-3" },
            { left: "46%", top: "12%", size: "h-6 w-6", rotate: "-rotate-6" },
            { left: "60%", top: "8%", size: "h-9 w-9", rotate: "rotate-12" },
            { left: "74%", top: "16%", size: "h-6 w-6", rotate: "-rotate-3" },
            { left: "88%", top: "6%", size: "h-7 w-7", rotate: "rotate-9" },
            { left: "10%", top: "34%", size: "h-7 w-7", rotate: "-rotate-9" },
            { left: "24%", top: "42%", size: "h-6 w-6", rotate: "rotate-6" },
            { left: "38%", top: "36%", size: "h-8 w-8", rotate: "-rotate-12" },
            { left: "52%", top: "44%", size: "h-6 w-6", rotate: "rotate-3" },
            { left: "66%", top: "34%", size: "h-7 w-7", rotate: "-rotate-6" },
            { left: "80%", top: "42%", size: "h-9 w-9", rotate: "rotate-12" },
            { left: "92%", top: "36%", size: "h-6 w-6", rotate: "-rotate-3" },
            { left: "6%", top: "66%", size: "h-8 w-8", rotate: "rotate-9" },
            { left: "20%", top: "74%", size: "h-6 w-6", rotate: "-rotate-6" },
            { left: "34%", top: "68%", size: "h-7 w-7", rotate: "rotate-3" },
            { left: "48%", top: "76%", size: "h-8 w-8", rotate: "-rotate-12" },
            { left: "62%", top: "64%", size: "h-6 w-6", rotate: "rotate-6" },
            { left: "76%", top: "72%", size: "h-7 w-7", rotate: "-rotate-9" },
            { left: "90%", top: "68%", size: "h-8 w-8", rotate: "rotate-12" },
            { left: "14%", top: "92%", size: "h-6 w-6", rotate: "-rotate-6" },
            { left: "40%", top: "90%", size: "h-7 w-7", rotate: "rotate-3" },
            { left: "68%", top: "92%", size: "h-6 w-6", rotate: "-rotate-9" },
            { left: "86%", top: "88%", size: "h-7 w-7", rotate: "rotate-6" },
          ].map((item, index) => (
            <IconHeart
              key={`bg-heart-${index}`}
              className={`absolute ${item.size} ${item.rotate} text-muted-foreground/20`}
              style={{ left: item.left, top: item.top }}
            />
          ))}
        </div>
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
          {gallery.map((item, index) => (
            <motion.button
              key={`${item.alt}-${index}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group mb-4 block w-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-transform duration-200 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              variants={gridItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: isMobile ? 0.3 : 0.55 }}
            >
              <div className={`relative w-full ${item.ratio}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="border-t border-border px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:px-4 sm:py-3 sm:text-xs">
                {item.alt}
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <VitrineLightbox
            images={lightboxImages}
            initialIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/5533988719351?text=Oi%21%20Vim%20do%20site%20do%20Ateli%C3%AA%20da%20Gisa%20e%20quero%20fazer%20uma%20encomenda."
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-4 right-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all duration-200 hover:border-emerald-500/60 hover:bg-emerald-500 hover:text-white"
      >
        <IconBrandWhatsapp className="h-5 w-5" stroke={1.6} />
      </a>
    </main>
  );
}
