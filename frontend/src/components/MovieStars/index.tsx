

import"./styles.css"

import StarFull from "../../assets/img/star-full.svg"
import StarHalf from "../../assets/img/star-half.svg"
import StarEmpty from "../../assets/img/star-empty.svg"

export function MovieStars() {
  return (
<div className="dsmovie-stars-container">
<img className="dsmovie-movie-card-image" src={StarFull } alt="estrela completa" />
<img className="dsmovie-movie-card-image" src={StarFull } alt="estrela completae" />
<img className="dsmovie-movie-card-image" src={StarFull } alt="estrela completa" />
<img className="dsmovie-movie-card-image" src={StarHalf } alt="estrela pela metade" />
<img className="dsmovie-movie-card-image" src={StarEmpty} alt="estrela vazia" />
</div>
  );
}