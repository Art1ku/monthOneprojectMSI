import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <>
            <div className='header'>
                <div className="conteiner">
                    
                    <Link to={"/"}><img  className='mainLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="" /></Link>

                    <div className='headerContent'>
                        <a href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%B4%D0%B7%D0%B8%D1%80%D0%B8,_%D0%A1%D0%B0%D1%82%D0%BE%D1%81%D0%B8"> Creator</a>
                        <a href="https://www.nintendo.com/us/"> Find games about Pokemon here!</a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Header
