
'use client';

import { Song } from "@/app/types/songs";

export default function SongList({
    songs,
    deleteSong,
    editSong
}: {
    songs: Song[];
    deleteSong: (id: number) => void;
    editSong: (song: Song) => void;
}) {
    return (
        <ul>
            {songs.map((song) => (
                <li key={song._id} className="card">
                    <h3>{song.title}</h3>
                    <p>Artist: {song.artist}</p>
                    <p>Genre: {song.genre}</p>

                    <button onClick={() => editSong(song)}>
                        Edit
                    </button>

                    {" "}

                    <button onClick={() => deleteSong(song._id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}
