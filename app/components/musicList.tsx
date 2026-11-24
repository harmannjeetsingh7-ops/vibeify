import { Music } from "@/app/types/music";

export default function MusicList({songs}: {songs: Music[]}) {
    return (
        <div className="moodGrid">
            {songs.map((song) => (
                <div key={song.trackId} className="moodCard">
                    <h3>{song.trackName}</h3>
                    <p>{song.artistName}</p>
                    <p>{song.collectionName}</p>
                    <a href={song.trackViewUrl}>Listen on iTunes</a>
                </div>
            ))}
        </div>
    );
}