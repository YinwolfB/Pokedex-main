/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux"
import { useFetch } from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import { PokeCard } from "../components/PokedexPage/PokeCard"
import { SelectType } from "../components/PokedexPage/SelectType"

export const PokedexPage = () => {

    const [inputValue, setInputValue] = useState('')
    const [selectValue, setSelectValue] = useState('allPokemons')

    const trainerName = useSelector(store => store.trainerName)

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

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
        <div>
            <p>Welcome <span>{trainerName}, Here you can find your favorite Pokémon. let's go!</span></p>
            <form onSubmit={handleSubmit}>
                <input ref={inputSearch} type="text" />
                <button>Search</button>
            </form>
            <SelectType
                setSelectValue={setSelectValue}
            />
            <div>
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
