import { useNavigate } from 'react-router-dom';
import './card.css'
import { useEffect, useState } from 'react'

const Card = (props) => {
    
    const {children, name,} = props
    const [imgSrc, setImgSrc] = useState('');


    const navigate = useNavigate()
    useEffect(() => {


        const fetchPokemonData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setImgSrc(data.sprites.front_default);
        };
        fetchPokemonData();
    }, [name]);
    

    return(
        
            <div className='cardWrapper' onClick={() => navigate(`pokemon/${name}`)}>
                <p className='cardTitle'>{children}</p>
                <img className='cardImg' src={imgSrc} alt={`${name} image`} /> 
            </div>
        
    )
}

export default Card