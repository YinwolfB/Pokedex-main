/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"
import { PokeInfoCard } from "../components/PokeInfoPage/PokeInfoCard"
import './styles/PokeInfoPage.css'

export const PokeinfoPage = () => {

    const { id } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const [pokemon, getPokemon] = useFetch(url)

    useEffect(() => {
        getPokemon()
    }, [])

    console.log(pokemon)

    return (
        <article className="pokeinfopage">
            <header className="pokeinfopage__header">
                <img className="pokeinfopage__header--teatle" src="./img/image 11 name.svg" alt="" />
                <img className="pokeinfopage__header--img" src="./img/Group 216 head.svg" alt="" />
            </header>
            <section className="pokeinfopage__pokeinfocard"> 
                <PokeInfoCard url={url} />
            </section>
        </article>
    )
}
