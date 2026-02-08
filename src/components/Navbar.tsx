'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#office', label: 'Our Office' },
        { href: '#faq', label: 'FAQ' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]">
            <div className="container mx-auto px-8 py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-[var(--color-primary)] text-xl font-medium tracking-tight"
                    >
                        Dr. Maya Reynolds
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[var(--color-text-light)] text-sm uppercase tracking-widest hover:text-[var(--color-primary)] transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span
                                className={`w-full h-0.5 bg-[var(--color-primary)] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                                    }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-[var(--color-primary)] transition-opacity ${isMenuOpen ? 'opacity-0' : ''
                                    }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-[var(--color-primary)] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                    }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-6 pb-6 border-t border-[var(--color-secondary-dark)]">
                        <div className="flex flex-col gap-4 pt-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-[var(--color-text-light)] text-sm uppercase tracking-widest hover:text-[var(--color-primary)] transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
