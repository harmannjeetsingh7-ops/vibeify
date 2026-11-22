
'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Song } from "@/app/types/songs";
import SongList from "@/app/components/songList";
import PageTitle from "@/app/components/pageTitle";

interface SongFormData {
    title: string;
    artist: string;
    genre: string;
}

export default function Playlists() {

    const [songs, setSongs] = useState<Song[]>([
        {
            _id: 1,
            title: "Perfect",
            artist: "Ed Sheeran",
            genre: "Pop"
        },
        {
            _id: 2,
            title: "Blinding Lights",
            artist: "The Weeknd",
            genre: "Pop"
        },
        {
            _id: 3,
            title: "Shape of You",
            artist: "Ed Sheeran",
            genre: "Pop"
        }
    ]);

    const { register, handleSubmit, reset } = useForm<SongFormData>();

    const onSubmit = (data: SongFormData) => {
        const newSong: Song = {
            _id: songs.length + 1,
            title: data.title,
            artist: data.artist,
            genre: data.genre
        };

        setSongs([...songs, newSong]);
        reset();
    };

    return (
        <main>
            <PageTitle title="My Playlists" />

            <h1>My Playlists</h1>
            <p>Here are your favourite songs.</p>

            <SongList songs={songs} />

            <h2>Add a New Song</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="title">Song Title:</label>
                    <input
                        id="title"
                        {...register("title", { required: true })}
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="artist">Artist:</label>
                    <input
                        id="artist"
                        {...register("artist", { required: true })}
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="genre">Genre:</label>
                    <input
                        id="genre"
                        {...register("genre", { required: true })}
                    />
                </fieldset>

                <button type="submit">Add Song</button>
            </form>
        </main>
    );
}
