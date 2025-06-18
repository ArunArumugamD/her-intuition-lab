'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/sessions', label: '1:1 SESSIONS' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <nav className="navigation-container">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`nav-button ${
            pathname === link.href ? 'bg-cream/10' : ''
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}