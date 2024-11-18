import React, { useState, useEffect } from "react";
import ErrorAlert from "../Components/ErrorAlert";
import Loading from "../Components/Loading";
import { apiClient } from "../apiClient";

function Dashboard() {
    const [animeData, setAnimeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchAnimeData() {
            try {
                const response = await apiClient("gogoanime/home/");

                // Access the recentReleases directly
                const recentReleases = response?.recentReleases || [];
                setAnimeData(recentReleases);
            } catch (err) {
                setError(err.message);
                console.error("Error when fetching anime data:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchAnimeData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorAlert message={error} />;
    }

    return (
        <section>
            <div className="displayCard_anime">
                {animeData.length > 0 ? (
                    animeData.map((anime) => (
                        <div className="card" key={anime.id}>
                            <figure>
                                <img src={anime.img} alt={anime.name} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{anime.name}</h2>
                                <p>{anime.episodeId}</p>
                                <p>
                                    <strong>Episode No:</strong>{" "}
                                    {anime.episodeNo || "N/A"}
                                </p>
                                <p>
                                    <strong>Sub/Dub:</strong> {anime.subOrDub}
                                </p>
                                <div className="card-actions justify-around">
                                    <button className="btn btn-primary">
                                        Watch
                                    </button>
                                    <button className="btn btn-secondary">
                                        Bookmark
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No anime data available</div>
                )}
            </div>
        </section>
    );
}

export default Dashboard;
