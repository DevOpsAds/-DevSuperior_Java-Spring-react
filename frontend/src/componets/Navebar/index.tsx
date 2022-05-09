import GithubIcon from '../../assets/img/github.svg'
import './styles.css'

export function Navebar() {
    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DSmovie</h1>

                    <a href="https://github.com/DevOpsAds/" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <img className="background-blue" src={GithubIcon} alt="" />
                            <p className="dsmovie-contact-link">/devsuperior</p>
                        </div>
                    </a>
                    <img src="" alt="" />
                </div>
            </nav>
        </header>
    );
}