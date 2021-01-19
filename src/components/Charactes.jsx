import React, {useState, useEffect} from 'react'

const Charactes = () => {
    const [characters, setCharactes] = useState([])
    console.log(characters)
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => setCharactes(data.results))
    },[])
    return (
        <div className="container">
            <div className="characters">
                {characters.map(character => (
                    <div key={character.id} className="box">
                        <img src={character.image} alt={character.name}/>
                        <div className="character">
                            <h3 className="name">{character.name}</h3>
                            <p className="specie">{character.species}</p>
                            <p className="status">{character.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Charactes
