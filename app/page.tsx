'use client';

import Link from "next/link";
import PageTitle from "@/app/components/pageTitle";
import React, { useState } from "react";
import { useSessionCounter } from "@/app/context/globalContext";

export default function Home() {
    const [name, setName] = useState<string>('');
    const { setUsername } = useSessionCounter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleSave = () => {
        setUsername(name);
    }

    return (
        <main className="homePage">
            <PageTitle title="Home" />

            <section className="hero">
                <p className="heroLabel">
                    YOUR MUSIC. YOUR VIBE.
                </p>

                <h1>Find Your Next Favourite Song.</h1>

                <p>
                    Discover new sounds, save your favourite songs,
                    and create a music collection that matches your mood.
                </p>

                <div className="heroButtons">
                    <Link href="/discover" className="button">
                        Discover Music
                    </Link>

                    <Link href="/playlists" className="button secondaryButton">
                        My Playlists
                    </Link>
                </div>
            </section>

            <section className="moodSection">
                <h2>Made For Your Mood</h2>
                <p>Every mood deserves its own soundtrack.</p>

                <div className="moodGrid">
                    <Link href="/discover/chill" className="moodCard">
                        <h3>Chill Vibes</h3>
                        <p>Relax, unwind, and enjoy the moment.</p>
                    </Link>

                    <Link href="/discover/energy" className="moodCard">
                        <h3>Energy Boost</h3>
                        <p>Feel the beat and stay motivated.</p>
                    </Link>

                    <Link href="/discover/love" className="moodCard">
                        <h3>Love Songs</h3>
                        <p>Music for every feeling and memory.</p>
                    </Link>
                </div>
            </section>

            <section className="exploreSection">
                <h2>Personalize Your Experience</h2>
                <p>Enter your name to make Vibeify your own.</p>

                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleChange}
                />

                <button onClick={handleSave}>
                    Save Name
                </button>
            </section>
        </main>
    );
}