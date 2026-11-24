import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <h2>Vibeify</h2>

            <p>Your Music. Your Vibe.</p>

            <div className="footerLinks">
                <Link href="/">Home</Link>
                <Link href="/playlists">My Playlists</Link>
                <Link href="/discover">Discover</Link>
                <Link href="/about">About</Link>
            </div>

            <hr />

            <p> COMP2112 | Georgian College</p>
            <p>© 2026 Vibeify All rights reserved.</p>
        </footer>
    );
}