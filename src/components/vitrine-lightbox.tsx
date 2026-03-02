"use client";

import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import * as React from "react";

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
  const touchStartX = React.useRef<number | null>(null);
  const touchStartY = React.useRef<number | null>(null);

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

  const current = images[index];
  const total = images.length;

  const goPrev = React.useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goNext = React.useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
      role="presentation"
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

      <div
        className="relative max-h-[85vh] max-w-[95vw]"
        onClick={(event) => event.stopPropagation()}
        onTouchStart={(event) => {
          const touch = event.touches[0];
          touchStartX.current = touch?.clientX ?? null;
          touchStartY.current = touch?.clientY ?? null;
        }}
        onTouchEnd={(event) => {
          const startX = touchStartX.current;
          const startY = touchStartY.current;
          if (startX === null || startY === null) return;
          const touch = event.changedTouches[0];
          if (!touch) return;
          const deltaX = touch.clientX - startX;
          const deltaY = touch.clientY - startY;
          const isHorizontalSwipe =
            Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY);
          if (!isHorizontalSwipe) return;
          if (deltaX > 0) {
            goPrev();
          } else {
            goNext();
          }
        }}
        role="presentation"
      >
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[85vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
        />
      </div>

      <div
        className="fixed bottom-[5px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur"
        onClick={(event) => event.stopPropagation()}
        role="presentation"
      >
        <button
          type="button"
          onClick={goPrev}
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
          onClick={goNext}
          className="inline-flex items-center gap-1 cursor-pointer"
          aria-label="Próxima foto"
        >
          Avançar
          <IconChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
