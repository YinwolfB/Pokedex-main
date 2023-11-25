/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react"
import { setTrainerName } from "../store/slices/trainerName.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export const HomePages = () => {

    const inputName = useRef()

    const dispatch = useDispatch()

    const navigate= useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim()))
        navigate('/pokedex')
    }

    return (
        <div>
            <h1>PokéDex</h1>
            <h2>Hi Trainer!</h2>
            <p>To start, please give me your trainer name</p>
            <form onSubmit={handleSubmit}>
                <input ref={inputName} type="text" />
                <button>Gotta catch'em all!</button>
            </form>
        </div>
    )
}
