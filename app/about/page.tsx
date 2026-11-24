import PageTitle from "@/app/components/pageTitle";

export default function About() {
    return (
        <main className="aboutPage">
            <PageTitle title="About" />

            <section className="moodSection">
                <h1>About the Project</h1>

                <p>
                    Vibeify is a music discovery and playlist management
                    web application developed using React, Next.js and
                    TypeScript. This project was created as part of
                    the Advanced Client-Side JavaScript course at
                    Georgian College.
                </p>
            </section>

            <section className="moodSection">
                <h2>Project Inspiration</h2>

                <p>
                    The idea behind Vibeify came from my interest in
                    music, particularly Punjabi music. I wanted to
                    create an interactive website where users could
                    discover songs based on their mood and manage
                    their favourite tracks.
                </p>
            </section>

            <section className="moodSection">
                <h2>Application Features</h2>

                <div className="moodGrid">

                    <div className="moodCard">
                        <h3>Home</h3>
                        <p>
                            Introduces Vibeify and allows users to
                            personalize their welcome message.
                        </p>
                    </div>

                    <div className="moodCard">
                        <h3>My Playlists</h3>
                        <p>
                            Allows users to add, edit and delete
                            songs from their personal music collection.
                        </p>
                    </div>

                    <div className="moodCard">
                        <h3>Discover</h3>
                        <p>
                            Retrieves songs, artists and album
                            information using the iTunes API.
                        </p>
                    </div>

                </div>
            </section>

            <section className="moodSection">
                <h2>Project Development</h2>

                <p>
                    This project demonstrates various concepts
                    learned throughout the course.
                </p>

                <ul>
                    <li>Next.js navigation and routing</li>
                    <li>React components and props</li>
                    <li>State management using useState</li>
                    <li>Side effects using useEffect</li>
                    <li>Shared data using useContext</li>
                    <li>Form handling and CRUD operations</li>
                    <li>External API integration using fetch</li>
                    <li>Responsive website design</li>
                </ul>
            </section>

            <section className="moodSection">
                <h2>Design and Appearance</h2>

                <p>
                    Vibeify uses a custom dark theme with a
                    music-inspired design. The website focuses on
                    simplicity, readability and consistent navigation
                    across different pages and screen sizes.
                </p>
            </section>

            <section className="moodSection">
                <h2>Learning Experience</h2>

                <p>
                    Developing Vibeify helped me improve my
                    understanding of React, state management,
                    reusable components and external APIs.
                    This project allowed me to apply classroom
                    concepts to a practical web application.
                </p>
            </section>

            <section className="moodSection">
                <h2>Future Improvements</h2>

                <p>
                    In the future, Vibeify could include user
                    authentication, permanent playlist storage,
                    additional music genres and advanced music
                    search functionality.
                </p>
            </section>

            <section className="exploreSection">
                <h2>Project Information</h2>

                <p>Project: Vibeify</p>
                <p>Course: COMP2112</p>
                <p>Advanced Client-Side JavaScript</p>
                <p>Georgian College</p>
                <p>Fall 2026</p>
            </section>
        </main>
    );
}