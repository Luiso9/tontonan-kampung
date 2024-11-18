import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorAlert from "../Components/ErrorAlert";

function Dashboard() {
	const [animeData, setAnimeData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchAnimeData() {
			try {
				const response = await axios.get(
					"https://api.allorigins.win/get?url=https://api-anime-rouge.vercel.app/aniwatch/"
				);
				setAnimeData(response.data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}
		fetchAnimeData();
	}, []);

	if (loading) {
		return <div className="loading-spinner">...</div>;
	}

	if (error) {
		return <ErrorAlert message={error}/>;
	}

	return (
		<section>
			<div className="displayCard_anime">
				{animeData.length > 0 ? (
					animeData.map((anime) => (
						<div className="card" key={anime.id}>
							<figure>
								<img src={anime.image} alt={anime.title} />
							</figure>
							<div className="card-body">
								<h2 className="card-title">{anime.title}</h2>
								<p>{anime.description}</p>
								<div className="card-actions justify-around">
									<button className="btn btn-primary">Watch</button>
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
