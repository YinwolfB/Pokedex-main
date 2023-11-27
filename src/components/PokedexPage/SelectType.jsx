/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react"
import { useFetch } from "../../hooks/useFetch"
import '../../pages/styles/PokedexPage.css'

/* eslint-disable react/no-unescaped-entities */
export const SelectType = ({ setSelectValue }) => {

    const url = 'https://pokeapi.co/api/v2/type'

    const [infoTypes, getInfoTypes] = useFetch(url)

    useEffect(() => {
        getInfoTypes()
    }, [])

    const selectElement = useRef()

    const handleChange = () => {
        setSelectValue(selectElement.current.value)
    }

    return (
        <article className="selecttype">
            <select className="selecttype__container" ref={selectElement} onChange={handleChange}>
                <option className="selecttype__allpoke" value='allPokemons'>  All Pokémon's </option>
                {
                    infoTypes?.results.map(type => (
                        <option className="selecttype__listype" key={type.url} value={type.url}>{type.name}</option>
                    ))
                }
            </select>
        </article>
    )
}

