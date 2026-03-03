"use client";

import {
  IconBrandWhatsapp,
  IconFlower,
  IconHeart,
  IconHome,
  IconLibraryPhoto,
  IconMoon,
  IconPackageExport,
  IconSparkles,
  IconSun,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { label: "Início", href: "#inicio", icon: IconFlower },
  { label: "Ateliê", href: "#sobre", icon: IconSparkles },
  { label: "Vitrine", href: "#vitrine", icon: IconLibraryPhoto },
  { label: "Depoimentos", href: "#depoimentos", icon: IconHeart },
  { label: "Encomendas", href: "#encomendas", icon: IconPackageExport },
];

function getSections() {
  return navItems
    .map((item) => document.querySelector(item.href))
    .filter(Boolean) as HTMLElement[];
}

function scrollToHash(href: string) {
  const id = href.replace("#", "");
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function MobileNavMenu({
  activeHash,
  onNavigate,
}: {
  activeHash: string;
  onNavigate: (href: string) => void;
}) {
  const { setOpenMobile } = useSidebar();

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Menu</SidebarGroupLabel>
        <SidebarMenu>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  data-active={activeHash === item.href}
                  className="transition-colors hover:text-secondary data-[active=true]:bg-sidebar-accent"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setOpenMobile(false);
                      requestAnimationFrame(() => {
                        onNavigate(item.href);
                      });
                    }}
                    className="flex w-full items-center gap-2"
                  >
                    <Icon />
                    <span>{item.label}</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [activeHash, setActiveHash] = React.useState("#inicio");
  const [isScrolled, setIsScrolled] = React.useState(false);
  const headerRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const sections = getSections();
    if (sections.length === 0) return;

    const visibility = new Map<string, number>();
    const handleEntries = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        const id = `#${(entry.target as HTMLElement).id}`;
        visibility.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
      }

      let best = sections[0];
      let bestRatio = -1;
      for (const section of sections) {
        const ratio = visibility.get(`#${section.id}`) ?? 0;
        if (ratio > bestRatio) {
          best = section;
          bestRatio = ratio;
        }
      }
      setActiveHash(`#${best.id}`);
    };

    let observer: IntersectionObserver | null = null;
    const createObserver = () => {
      observer?.disconnect();
      const headerOffset = (headerRef.current?.offsetHeight ?? 72) + 8;
      observer = new IntersectionObserver(handleEntries, {
        root: null,
        rootMargin: `-${headerOffset}px 0px -55% 0px`,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      });
      sections.forEach((section) => observer?.observe(section));
    };

    createObserver();
    window.addEventListener("resize", createObserver);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", createObserver);
    };
  }, []);

  React.useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar collapsible="offcanvas" className="bg-card">
        <MobileNavMenu
          activeHash={activeHash}
          onNavigate={(href) => scrollToHash(href)}
        />
      </Sidebar>
      <div className="flex min-h-svh w-full flex-col">
        <header
          ref={headerRef}
          className={`fixed top-0 z-30 w-full transition-colors duration-300 ${
            isScrolled
              ? "border-b border-border/70 bg-background/80 backdrop-blur"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                requestAnimationFrame(() => {
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                });
              }}
              className={`group flex items-center gap-2 text-sm font-semibold transition-transform hover:scale-105 cursor-pointer ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              aria-label="Voltar ao topo"
            >
              <IconFlower className="h-4 w-4" stroke={1.6} />
              Ateliê da Gisa
            </button>
            <nav
              className={`hidden items-center gap-6 text-sm font-semibold md:flex ${
                isScrolled ? "text-muted-foreground" : "text-white/90"
              }`}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-2 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${
                    isScrolled
                      ? `after:bg-primary ${
                          activeHash === item.href
                            ? "text-primary after:w-full"
                            : "text-muted-foreground hover:text-primary after:w-0 hover:after:w-full"
                        }`
                      : `after:bg-white ${
                          activeHash === item.href
                            ? "text-white after:w-full"
                            : "text-white/90 hover:text-white after:w-0 hover:after:w-full"
                        }`
                  }`}
                >
                  {item.label === "Início" ? (
                    <IconHome className="size-4" />
                  ) : (
                    <item.icon className="size-4" />
                  )}
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  className={isScrolled ? "" : "text-white hover:text-white"}
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  aria-label="Alternar tema"
                >
                  {isDark ? (
                    <IconSun className="h-4 w-4" />
                  ) : (
                    <IconMoon className="h-4 w-4" />
                  )}
                </Button>
              )}
              <SidebarTrigger
                className={isScrolled ? "md:hidden" : "md:hidden text-white"}
              />
            </div>
          </div>
        </header>
        {children}
      </div>
      <a
        href="https://wa.me/5533988719351?text=Oi%21%20Vim%20do%20site%20do%20Ateli%C3%AA%20da%20Gisa%20e%20quero%20fazer%20uma%20encomenda."
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-4 right-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all duration-200 hover:border-emerald-500/60 hover:bg-emerald-500 hover:text-white"
      >
        <IconBrandWhatsapp className="h-5 w-5" stroke={1.6} />
      </a>
    </SidebarProvider>
  );
}
