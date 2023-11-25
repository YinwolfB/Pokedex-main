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
                {/* Tipo y habilidades*/}
                <section>
                    <PokeInfoCard url={url} />
                </section>
            </article>
        </div>
    )
}
