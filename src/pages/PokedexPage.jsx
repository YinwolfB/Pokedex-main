/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux"
import { useFetch } from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import { PokeCard } from "../components/PokedexPage/PokeCard"
import { SelectType } from "../components/PokedexPage/SelectType"
import './styles/PokedexPage.css'

export const PokedexPage = () => {

    const [inputValue, setInputValue] = useState('')
    const [selectValue, setSelectValue] = useState('allPokemons')

    const trainerName = useSelector(store => store.trainerName)

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20000&offset=0'

    const [pokemons, getPokemons, getByTypeApi] = useFetch(url)

    useEffect(() => {
        if (selectValue === 'allPokemons') {
            getPokemons()
        } else {
            getByTypeApi(selectValue)
        }
    }, [selectValue])

    const inputSearch = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        setInputValue(inputSearch.current.value.toLowerCase().trim())
        inputSearch.current.value = ''
    }

    const cdFilter = (poke) => {
        //Filtro por nombre en el input
        const nameFiltered = poke.name.includes(inputValue)
        return nameFiltered
    }

    return (
        <div className="pokedex">
            <header className="pokedex__header">
                <img className="pokedex__header--teatle" src="/src/pages/styles/img/title.svg" alt="" />
                <img className="pokedex__header--img" src="/src/pages/styles/img/header.svg" alt="" />
            </header>
            <p className="pokedex__greeting"><p className="pokedex__greeting--name">Welcome {trainerName}</p>, Here you can find your favorite Pokémon. let's go!</p>
            <section className="pokedex__container">
                <form className="pokedex__form" onSubmit={handleSubmit}>
                    <input className="pokedex__input" ref={inputSearch} type="text" />
                    <button className="pokedex__btn">Search</button>
                </form>
                <div className="pokedex__selecttype">
                    <SelectType
                        setSelectValue={setSelectValue}
                    />
                </div>
            </section>
            <div className="pokedex__page">
                {
                    pokemons?.results.filter(cdFilter).map(poke => (
                        <PokeCard
                            key={poke.url}
                            url={poke.url}
                        />
                    ))
                }
            </div>
        </div>
    )
}
