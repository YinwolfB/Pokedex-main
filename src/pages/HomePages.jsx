/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react"
import { setTrainerName } from "../store/slices/trainerName.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import './styles/HomePages.css'
import title from "../../public/img/title.svg"
import footer from "../../public/img/footer.svg"


export const HomePages = () => {

    const inputName = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim()))
        navigate('/pokedex')
    }

    return (
        <div className="homepages">
            <section className="homepages__container">
                <img className="homepages__img" src= {title} alt="PokéDex" />
                <h2 className="homepages__greeting">Hi Trainer!</h2>
                <p className="homepages__give">To start, please give me your trainer name</p>
                <form className="homepages__form" onSubmit={handleSubmit}>
                    <input className="homepages__input" ref={inputName} type="text" />
                    <button className="homepages__btn">Gotta catch'em all!</button>
                </form>
            </section>
            <footer className="homepages__footer">
                <img className="homepages__footer--img" src={footer} alt="Footer" />
            </footer>
        </div>
    )
}
