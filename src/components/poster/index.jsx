import styles from './Poster.module.css'

const Poster = ({title,image,year,imdbID}) => {
    return ( <div className={styles.movie}>
        <h3>{title}</h3>
        <a className={styles.image} href={`https://imdb.com/title/${imdbID}`} target="_blank">
            <img width="200" alt="Movie Poster" src={image}/>
            <div className={styles.hover_card}>
                <h3>{imdbID}</h3>
                <p>{year}</p>
            </div>
        </a>
    </div> );
}
 
export default Poster;