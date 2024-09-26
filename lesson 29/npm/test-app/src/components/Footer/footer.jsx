import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <>
            <div className='footer'>
                <div className="conteiner">
                    <div className='firstHalfContent'>
                        <div className='footerText1'>
                            <p className='pokeGame'>Try Our mobile game <a href="https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=ru&gl=US">Pokemon GO</a>!</p>
                            <p className='underPokeGameText'>Thank you Satoshi Tajiri for pokemons</p>

                        </div>
                        <img className='pokeBall' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/768px-Pok%C3%A9_Ball_icon.svg.png?20161023215848" alt="" />
                    </div>
                    <div className='lineBetween'></div>
                    <div className='secondHalfContent'>
                        <div className='footerText'>
                            <a href="https://www.youtube.com/results?search_query=pokemon"><p className='pokeYt'>YouTube</p></a>
                            <a href="https://www.instagram.com/pokemon/"><p className='pokeInst'>Instagram</p></a>
                            <a href="https://pokeapi.co/"><p className='pokeApi'>Poke Api</p></a>
                            <a href="https://www.pokemon.com/us"><p className='pokeOfficial'>Official Site</p></a> 
                        </div>
                    </div>
                    
                    {/* <Link to={"/"}><img  className='mainLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="" /></Link> */}
                    
                </div>
            </div>
        </>
    )
}

export default Footer