"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ListItem from "./item";

/**
 * Componente Navbar que:
 * - Muestra el logo con el color primary (#304254)
 * - Presenta un dropdown en “Home” que se abre al hacer hover (imitando el comportamiento modal)
 * - Usa hash links para desplazar la página a la sección clickeada.
 */
const Navbar: React.FC = () => {
  return (
    <nav className="  bg-[#f2fbf0] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto p-2 flex items-center justify-end">
        {/* Logo/Marca con el color primary */}

        {/* Menú de navegación */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-1">
            {/* Dropdown de “Home” con modal al hacer hover */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="#home"
                      >
                        <span className="text-lg font-medium">Inicio</span>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Sección principal del sitio.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="#quien-soy" title="¿Quién Soy?">
                    Conóceme mejor.
                  </ListItem>
                  <ListItem href="#metodologia" title="Metodología">
                    Mi enfoque y métodos.
                  </ListItem>
                  <ListItem href="#cursos" title="Cursos disponibles">
                    Ver cursos ofrecidos.
                  </ListItem>
                  <ListItem href="#testimonios" title="Testimonios">
                    Lo que dicen mis clientes.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Los demás items también usan hash links para scroll interno */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#quien-soy" className={navigationMenuTriggerStyle()}>
                  ¿Quién Soy?
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#metodologia" className={navigationMenuTriggerStyle()}>
                  Metodología
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#cursos" className={navigationMenuTriggerStyle()}>
                  Cursos disponibles
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#testimonios" className={navigationMenuTriggerStyle()}>
                  Testimonios
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};
export default Navbar;
