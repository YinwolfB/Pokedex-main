/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"
import { PokeInfoCard } from "../components/PokeInfoPage/PokeInfoCard"

export const PokeinfoPage = () => {

    const { id } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const [pokemon, getPokemon] = useFetch(url)

    useEffect(() => {
        getPokemon()
    }, [])

    console.log(pokemon)

    return (
        <div>
            <article>
                {/* numero, nombre, peso y altura */}
                <section>
                    <img src={pokemon?.sprites.other.dream_world.front_default} alt="" />
                    <h3><span>{pokemon?.id}</span></h3>
                    <h2>{pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}</h2>
                    <p><span>Weight </span><span>{pokemon?.weight}</span></p>
                    <p><span>Height </span><span>{pokemon?.height}</span></p>
                </section>

                {/* Tipo y habilidades*/}
                <section>
                    <PokeInfoCard url={url} />
                </section>
            </article>
        </div>
    )
}
