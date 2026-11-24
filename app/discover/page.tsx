import PageTitle from "@/app/components/pageTitle";
import { Music } from "@/app/types/music";
import MusicList from "@/app/components/musicList";

export default async function Discover() {

    let songs: Music[] = [];
    let errorMessage: string = "";

    try {
        const response: Response = await fetch(
            "https://itunes.apple.com/search?term=punjabi+music&media=music&entity=song&limit=12&country=ca",
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
            <PageTitle title="Discover" />
            <h2>Explore Punjabi songs and your favourite artists.</h2>

            {errorMessage && <p className="error">{errorMessage}</p>}

            {!errorMessage && <MusicList songs={songs} />}
        </main>
    );
}