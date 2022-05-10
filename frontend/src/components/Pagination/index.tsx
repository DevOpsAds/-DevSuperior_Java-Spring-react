import './styles.css'
import Arrow from "../../assets/img/arrow.svg"
export function Pagination() {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true} >
          <img className="dsmovie-flip-horizontal" src={Arrow} alt="seta para a esquerda" />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dsmovie-pagination-button" disabled={false} >
          <img src={Arrow} alt="seta para a direita" />
        </button>
      </div>
    </div>
  );
}