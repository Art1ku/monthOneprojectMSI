import './main.css'
import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Footer from "../../components/Footer";

const MainPage = () => {

    const [result, setResult] = useState(null)

    const handleGetPokemons = async(url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=18') => {
        const response = await fetch(url)
        const data = await response.json()
        setResult(data)
    }

    useEffect(() => {
        handleGetPokemons()
    }, [])
        
    return (
        <> 
            <div className='wrapper'>
                <div className='list'>
                    
                        {result?.results?.map((item, index) => (
                            <div key={index}>
                                {/* <p>{index + 1} - {item.name}</p> */}
                                <Card name={item.name}>{item.name}</Card>
                            </div>
                        ))}
                        <div>
                            <button className='but1' onClick={() => handleGetPokemons(result.previous)}>Prev</button>
                            <button className='but2' onClick={() => handleGetPokemons(result.next)}>Next</button>
                        </div>
                    
                </div>
                <div className='startOfTheFooter'></div>
                <Footer></Footer>
            </div>
        </>
    )
}
// img={item.sprites.front_default}

export default MainPage