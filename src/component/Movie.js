import styles from "./Movie.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, small_cover_image, title, summary, genres }) {
    return (
        <div className={styles.movie}>
            <img src={small_cover_image} className={styles.movie__img}/>
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
                <ul className={styles.movie__genres}>
                    {genres.map((genre, index) => <li key={index}>{genre}</li>)}
                </ul>
            </div>
        </div>
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    small_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired

}

export default Movie;