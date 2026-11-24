import { Music } from "@/app/types/music";
import PageTitle from "@/app/components/pageTitle";
import MusicList from "@/app/components/musicList";

export default async function Chill() {

    let songs: Music[] = [];
    let errorMessage: string = "";

    try {
        const response: Response = await fetch(
            "https://itunes.apple.com/search?term=punjabi+chill&entity=song&limit=12",
            { cache: "force-cache" }
        );

        if (response.ok) {
            const data: { results: Music[] } = await response.json();
            songs = data.results;
        }
        else {
            errorMessage = "Unable to load music. Please try again later.";
        }
    }
    catch (error: unknown) {
        console.log(`Music Error: ${error}`);
        errorMessage = "Unable to load music. Please try again later.";
    }

    return (
        <main>
            <PageTitle title="Chill Vibes" />

            <h1>Chill Vibes</h1>
            <p>Relax and enjoy Punjabi music.</p>

            {errorMessage && <p className="error">{errorMessage}</p>}

            {!errorMessage && <MusicList songs={songs} />}
        </main>
    );
}