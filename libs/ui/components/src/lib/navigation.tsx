'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '..';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavigationItem = {
  label: string;
  href: string;
  exact?: boolean;
};

interface NavigationProps {
  items: NavigationItem[];
}

export function Navigation({ items }: NavigationProps) {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem>
            <Link href={item.href} key={item.href} passHref legacyBehavior>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                active={
                  item.exact
                    ? pathname === item.href
                    : pathname.startsWith(item.href)
                }
              >
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
