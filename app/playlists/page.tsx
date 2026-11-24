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

    const [editingSong, setEditingSong] = useState<Song | null>(null);

    const [nextId, setNextId] = useState<number>(4);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<SongFormData>();

    const deleteSong = (id: number) => {
        setSongs(songs.filter((song) => song._id !== id));

        if (editingSong && editingSong._id === id) {
            setEditingSong(null);
            reset();
        }
    };

    const editSong = (song: Song) => {
        setEditingSong(song);

        reset({
            title: song.title,
            artist: song.artist,
            genre: song.genre
        });
    };

    const onSubmit = (data: SongFormData) => {
        if (editingSong) {
            setSongs(songs.map((song) =>
                song._id === editingSong._id
                    ? { ...song, ...data }
                    : song
            ));

            setEditingSong(null);
        }
        else {
            const newSong: Song = {
                _id: nextId,
                title: data.title,
                artist: data.artist,
                genre: data.genre
            };

            setSongs([...songs, newSong]);
            setNextId(nextId + 1);
        }

        reset();
    };

    return (
        <main className="playlistPage">

            <PageTitle title="My Playlists" />

            <h1>My Playlists</h1>
            <p>Here are your favourite songs.</p>

            <SongList
                songs={songs}
                deleteSong={deleteSong}
                editSong={editSong}
            />

            <h2>{editingSong ? "Edit Song" : "Add a New Song"}</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="title">Song Title:</label>
                    <input
                        id="title"
                        {...register("title", { required: "Song title is required" })}
                    />
                    {errors.title && <span className="error">{errors.title.message}</span>}
                </fieldset>

                <fieldset>
                    <label htmlFor="artist">Artist:</label>
                    <input
                        id="artist"
                        {...register("artist", { required: "Artist is required" })}
                    />
                    {errors.artist && <span className="error">{errors.artist.message}</span>}
                </fieldset>

                <fieldset>
                    <label htmlFor="genre">Genre:</label>
                    <input
                        id="genre"
                        {...register("genre", { required: "Genre is required" })}
                    />
                    {errors.genre && <span className="error">{errors.genre.message}</span>}
                </fieldset>

                <button type="submit">
                    {editingSong ? "Save Changes" : "Add Song"}
                </button>

                {editingSong && (
                    <button
                        type="button"
                        onClick={() => {
                            setEditingSong(null);
                            reset();
                        }}
                    >
                        Cancel
                    </button>
                )}
            </form>
        </main>
    );
}