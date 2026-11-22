
'use client';

import PageTitle from "@/app/components/pageTitle";

import { useState } from "react";

export default function Home() {

    const [counter, setCounter] = useState<number>(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }

    const handleReset = () => {
        setCounter(0);
    }

    return (
        <main>
            <PageTitle title="Home" />
            <h1>Welcome to Vibeify</h1>
            <p>Your personal music collection.</p>

            <section>
                <h2>Discover Your Music</h2>
                <p>Save your favourite songs and create playlists.</p>
            </section>

            <section>
                <p>You have explored {counter} songs.</p>
                <button onClick={handleClick}>Explore Song</button>
                <button onClick={handleReset}>Reset</button>
            </section>
        </main>
    );
}
