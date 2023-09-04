import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const { id } = useParams();

    const getMovies = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        setMovie(json.data.movie);
        setLoading(false);

        console.log(json)
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <div>
                    <h1>Detail</h1>
                    <img src={movie.background_image} />
                </div>
            }
        </div>
    )
}

export default Detail;