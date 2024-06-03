import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
const PokemonPage = (props) => {


    // const {pokemonUrl} = props;

    const [pokemonData, setPokemonData] = useState(null)

    const location = useLocation()

    const pokemonUrl = location.pathname.split("/").pop()

    const handleGetPokemons = async() => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonUrl)
        const result = await response.json()
        setPokemonData(result)
    }   
    
    async function getPokemonTypes() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonData?.id}/`);
        const data = await response.json();
        const typee = data.types.map(type => type.type.name).join(' and ');
        // document.getElementById('pokemon-types').textContent = typee;

        const typePoke = document.getElementById('pokemon-types');
        typePoke.textContent = typee;

        if (typee.includes('fire')) {
            typePoke.style.border = 'linear-gradient(111.4deg, rgb(246, 4, 26) 0.4%, rgb(251, 139, 34) 100.2%), solid, 1px';
            typePoke.style.background = 'linear-gradient(111.4deg, rgb(246, 4, 26) 0.4%, rgb(251, 139, 34) 100.2%)';
        } else if(typee.includes('water')){
            typePoke.style.border = 'linear-gradient(109.5deg, rgb(13, 11, 136) 9.4%, rgb(66, 153, 254) 78.4%), solid, 1px';
            typePoke.style.background = 'linear-gradient(109.5deg, rgb(13, 11, 136) 9.4%, rgb(66, 153, 254) 78.4%)';
        } else if(typee.includes('grass')){
            typePoke.style.border = 'linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))';
            typePoke.style.background = 'linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))';
        }else if(typee.includes('poison')){
            typePoke.style.border = 'linear-gradient(to right, rgb(173, 83, 137), rgb(60, 16, 83))';
            typePoke.style.background = 'linear-gradient(to right, rgb(173, 83, 137), rgb(60, 16, 83))';
        }else if(typee.includes('bug')){
            typePoke.style.border = 'linear-gradient(110.1deg, rgb(34, 126, 34) 2.9%, rgb(168, 251, 60) 90.3%)';
            typePoke.style.background = 'linear-gradient(110.1deg, rgb(34, 126, 34) 2.9%, rgb(168, 251, 60) 90.3%)';
        }else if(typee.includes('dark')){
            typePoke.style.border = 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)';
            typePoke.style.background = 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)';
        }else if(typee.includes('psychic')){
            typePoke.style.border = 'rgb(255, 0, 85), solid, 1pxlinear-gradient(109.8deg, rgb(238, 9, 121) 42.8%, rgb(255, 106, 0) 83.3%)';
            typePoke.style.background = 'linear-gradient(109.8deg, rgb(238, 9, 121) 42.8%, rgb(255, 106, 0) 83.3%)';
        }else if(typee.includes('normal')){
            typePoke.style.border = 'greenyellolinear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)w, solid, 1px';
            typePoke.style.background = 'linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)';
        }else if(typee.includes('rock')){
            typePoke.style.border = 'linear-gradient(110.3deg, rgb(238, 179, 123) 8.7%, rgb(216, 103, 77) 47.5%, rgb(114, 43, 54) 89.1%), solid, 1px';
            typePoke.style.background = 'linear-gradient(110.3deg, rgb(238, 179, 123) 8.7%, rgb(216, 103, 77) 47.5%, rgb(114, 43, 54) 89.1%)';
        }else if(typee.includes('fighting')){
            typePoke.style.border = 'linear-gradient(90deg, rgb(255, 157, 129) 24.3%, rgb(255, 78, 78) 78.3%), solid, 1px';
            typePoke.style.background = 'linear-gradient(90deg, rgb(255, 157, 129) 24.3%, rgb(255, 78, 78) 78.3%)';
        }else if(typee.includes('flying')){
            typePoke.style.border = 'linear-gradient(109.6deg, rgb(204, 228, 247) 11.2%, rgb(237, 246, 250) 100.2%), solid, 1px';
            typePoke.style.background = 'linear-gradient(109.6deg, rgb(204, 228, 247) 11.2%, rgb(237, 246, 250) 100.2%)';
        }else if(typee.includes('fairy')){
            typePoke.style.border = 'linear-gradient(109.6deg, rgb(253, 199, 141) 11.3%, rgb(249, 143, 253) 100.2%), solid, 1px';
            typePoke.style.background = 'linear-gradient(109.6deg, rgb(253, 199, 141) 11.3%, rgb(249, 143, 253) 100.2%)';
        }else if(typee.includes('electric')){
            typePoke.style.border = 'linear-gradient(109.6deg, rgb(255, 219, 47) 11.2%, rgb(244, 253, 0) 100.2%), solid, 1px';
            typePoke.style.background = 'linear-gradient(109.6deg, rgb(255, 219, 47) 11.2%, rgb(244, 253, 0) 100.2%)';
        }else if(typee.includes('dragon')){
            typePoke.style.border = 'linear-gradient(90deg, #6a81ff,#008aca,#1d2980), solid, 1px';
            typePoke.style.background = 'linear-gradient(90deg, #6a81ff,#008aca,#1d2980)';
        }else if(typee.includes('ghost')){
            typePoke.style.border = 'linear-gradient(109.6deg, rgb(43, 1, 91) 13.4%, rgb(122, 2, 54) 100.2%), solid, 1px';
            typePoke.style.background = 'linear-gradient(109.6deg, rgb(43, 1, 91) 13.4%, rgb(122, 2, 54) 100.2%)';
        }else if(typee.includes('ice')){
            typePoke.style.border = 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%), solid, 1px';
            typePoke.style.background = 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)';
        }else if(typee.includes('steel')){
            typePoke.style.border = 'linear-gradient(99.6deg, rgb(112, 128, 152) 10.6%, rgb(242, 227, 234) 32.9%, rgb(234, 202, 213) 52.7%, rgb(220, 227, 239) 72.8%, rgb(185, 205, 227) 81.1%, rgb(154, 180, 212) 102.4%), solid, 1px';
            typePoke.style.background = 'linear-gradient(99.6deg, rgb(112, 128, 152) 10.6%, rgb(242, 227, 234) 32.9%, rgb(234, 202, 213) 52.7%, rgb(220, 227, 239) 72.8%, rgb(185, 205, 227) 81.1%, rgb(154, 180, 212) 102.4%)';
        }else if(typee.includes('ground')){
            typePoke.style.border = ' linear-gradient(87.4deg, rgb(251, 160, 41) 1.9%, rgb(200, 125, 76) 49.7%, rgb(83, 54, 54) 100.5%), solid, 1px';
            typePoke.style.background = ' linear-gradient(87.4deg, rgb(251, 160, 41) 1.9%, rgb(200, 125, 76) 49.7%, rgb(83, 54, 54) 100.5%)';
        }
        
    }
    // const typee = document.getElementById('pokemon-types').textContent;
    
 
    getPokemonTypes();
    console.log(pokemonData?.order)

    getPokemonTypes();
    
    useEffect(() => {
        handleGetPokemons()
    }, [])

    return(
        <>
            <div className="wrapper">
                <div className="pokeCardWrapper">
                    <div className="pokeImgWrapper">
                        <img className="pokeImg" src={pokemonData?.sprites.front_default} alt={pokemonData?.name} />
                    </div>
                    <div className="pokeContent">
                        <Link to={"/"}><p className="arrow"><i class="arrowleft"></i>  Back</p></Link>
                        <p className="pokeName">{pokemonData?.name}</p>
                        <div className="pokeInfo">
                            <p className="pokeOrder">Pokemon number: {pokemonData?.id}</p>
                            <p className="pokeHeight">Height: {pokemonData?.height} ft</p>
                            <p className="pokeWeight">Weight: {pokemonData?.weight} lb</p>
                            <p className="Type">Type: <p className="pokemon-types" id="pokemon-types"></p></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonPage