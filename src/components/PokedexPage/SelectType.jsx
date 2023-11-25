/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react"
import { useFetch } from "../../hooks/useFetch"

/* eslint-disable react/no-unescaped-entities */
export const SelectType = ({setSelectValue}) => {

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
        <select ref={selectElement} onChange={handleChange}>
            <option value='allPokemons'>All Pokémon's </option>
            {
                infoTypes?.results.map(type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
        </select>
    )
}

