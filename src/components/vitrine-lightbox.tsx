"use client";

import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import * as React from "react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type VitrineImage = {
  src: string;
  alt: string;
};

export function VitrineLightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: VitrineImage[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = React.useState(initialIndex);
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  React.useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, []);

  if (images.length === 0) return null;

  const total = images.length;

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  React.useEffect(() => {
    if (!api) return;
    api.scrollTo(initialIndex, true);
  }, [api, initialIndex]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        api?.scrollPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        api?.scrollNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [api, onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        className="fixed right-[5px] top-[5px] z-10 text-white cursor-pointer"
        aria-label="Fechar imagem"
      >
        <IconX />
      </button>

      <motion.div
        className="relative w-full max-w-[95vw]"
        onClick={(event) => event.stopPropagation()}
        role="presentation"
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Carousel
          opts={{ align: "center", loop: true }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent containerClassName="touch-pan-y py-2">
            {images.map((image) => (
              <CarouselItem key={image.src} className="flex justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-h-[85vh] w-auto max-w-[95vw] rounded-2xl object-contain shadow-2xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>

      <div
        className="fixed bottom-[5px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur"
        onClick={(event) => event.stopPropagation()}
        role="presentation"
      >
        <button
          type="button"
          onClick={() => api?.scrollPrev()}
          className="inline-flex items-center gap-1 cursor-pointer"
          aria-label="Foto anterior"
        >
          <IconChevronLeft className="h-4 w-4" />
          Voltar
        </button>
        <span className="min-w-10 text-center font-semibold">
          {index + 1} / {total}
        </span>
        <button
          type="button"
          onClick={() => api?.scrollNext()}
          className="inline-flex items-center gap-1 cursor-pointer"
          aria-label="Próxima foto"
        >
          Avançar
          <IconChevronRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}
