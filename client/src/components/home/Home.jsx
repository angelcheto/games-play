import { useEffect, useState } from "react";
import gamesAPI from "../../api/games-api";
import LatestGame from "./latest-game/LatestGame";

export default function Home() {
    const [latest, setLatestGames] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await gamesAPI.getLatest();

            setLatestGames(result.reverse());
        })();
    }, []);

    return(
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero"/>

            <div id="home-page">
                <h1>Latest Games</h1>

                {latest.length > 0 
                    ? latest.map(game => <LatestGame key={game._id} {...game } />)
                    : <p className="no-articles">No games yet</p>
                }
            </div>
        </section>
    );
}
