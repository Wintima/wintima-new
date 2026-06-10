'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { donateCta, isNavActive, mainNav, type NavItem } from '@/lib/site-navigation';

type MobileNavContentProps = {
  pathname: string;
  onNavigate: () => void;
};

function NavLink({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const active = isNavActive(pathname, item.href);

  return (
    <Link
      href={item.href}
      className={`hover:text-wintima-maroon block rounded-md px-2 py-2 text-base font-medium transition-colors duration-300 ${
        active ? 'text-wintima-maroon' : 'text-wintima-charcoal'
      }`}
      aria-current={active ? 'page' : undefined}
      onClick={onNavigate}
    >
      {item.name}
    </Link>
  );
}

export function MobileNavContent({ pathname, onNavigate }: MobileNavContentProps) {
  return (
    <div className="mt-8 flex flex-col space-y-4">
      <div className="flex items-center space-x-3 border-b border-gray-200 pb-4">
        <Image
          src="/images/logo.png"
          alt="Wintima Foundation Logo"
          className="h-8 w-8 object-contain"
          width={32}
          height={32}
        />
        <span className="text-wintima-charcoal text-lg font-bold">Wintima Foundation</span>
      </div>

      <nav aria-label="Main navigation">
        <ul className="space-y-1">
          {mainNav.map((item) => (
            <li key={item.name}>
              <NavLink item={item} pathname={pathname} onNavigate={onNavigate} />
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-gray-200 pt-4">
        <Button
          asChild
          className="bg-wintima-maroon hover:bg-wintima-maroon/90 w-full rounded-full py-3 font-medium text-white"
        >
          <Link href={donateCta.href} onClick={onNavigate}>
            {donateCta.name}
          </Link>
        </Button>
      </div>
    </div>
  );
}
