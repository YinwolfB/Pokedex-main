/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"
import { PokeInfoCard } from "../components/PokeInfoPage/PokeInfoCard"
import './styles/PokeInfoPage.css'
import title from "../../public/img/title.svg"
import header from "../../public/img/header.svg"

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
                <img className="pokeinfopage__header--title" src={title} alt="" />
                <img className="pokeinfopage__header--img" src={header} alt="" />
            </header>
            <section className="pokeinfopage__pokeinfocard"> 
                <PokeInfoCard url={url} />
            </section>
        </article>
    )
}
