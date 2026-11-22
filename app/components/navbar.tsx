
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathName: string = usePathname();

    const getLinkClass = (href: string) =>
        pathName === href || pathName.startsWith(href + '/')
            ? 'activeLink'
            : 'inactiveLink'

    return (
        <nav className="bg-gray-900 text-white p-4 flex flex-col md:flex-row md:justify-between md:items-center">
            <h1 className="text-xl font-bold mb-2 md:mb-0">
                <Link href="/">Vibeify</Link>
            </h1>

            <ul className="flex flex-col md:flex-row md:space-x-4">
                <li>
                    <Link href="/" className={getLinkClass('/')}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/playlists" className={getLinkClass('/playlists')}>
                        My Playlists
                    </Link>
                </li>
                <li>
                    <Link href="/discover" className={getLinkClass('/discover')}>
                        Discover
                    </Link>
                </li>
                <li>
                    <Link href="/about" className={getLinkClass('/about')}>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
