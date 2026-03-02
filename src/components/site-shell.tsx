"use client";

import {
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

    const updateActive = () => {
      const headerOffset = (headerRef.current?.offsetHeight ?? 72) + 8;
      const scrollPos = window.scrollY + headerOffset;
      let current = sections[0];
      for (const section of sections) {
        if (section.offsetTop <= scrollPos) {
          current = section;
        }
      }
      setActiveHash(`#${current.id}`);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
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
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            <div
              className={`flex items-center gap-2 text-sm font-semibold ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              <IconFlower className="h-4 w-4" stroke={1.6} />
              Ateliê da Gisa
            </div>
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
    </SidebarProvider>
  );
}
