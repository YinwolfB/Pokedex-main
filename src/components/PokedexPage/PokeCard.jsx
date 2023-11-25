/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './styles/PokeCard.css'

export const PokeCard = ({ url }) => {

    const [infoPoke, getInfoPoke] = useFetch(url)

    useEffect(() => {
        getInfoPoke()
    }, [])

    /*console.log(infoPoke) */

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/pokedex/${infoPoke?.id}`)
    }
    const firstType = infoPoke?.types[0].type.name
    return (
        <article className={`pokecard ${firstType}-border`} onClick={handleNavigate}>
            <header className={`pokecard__header ${firstType}-gradient`}>
                <img className="pokecard__img" src={infoPoke?.sprites.other["official-artwork"].front_default} alt="" />
            </header>
                <section className="pokecard__body">
                    <h3 className={`pokecard__name ${firstType}-font`}>{infoPoke?.name.charAt(0).toUpperCase() + infoPoke?.name.slice(1)}</h3>
                    <ul className="pokecard__types">
                        {infoPoke?.types.map((infoType, index) => (
                            <li className="pokecard__types--name" key={`${infoType.type.name}-${index}`}> {infoType.type.name}</li>
                            ))}
                    </ul>
                    <h4 className="pokecard__types--title">Type</h4>

                    <hr className="pokecard__hr" />

                    <ul className="pokecard__stats">
                        {infoPoke?.stats.map((infoStat, index) => (
                            <li className="pokecard__stat" key={`${infoStat.stat.name}-${index}`}>
                                <h3> <span className="pokecard__stat--name">{infoStat.stat.name}</span> </h3>
                                <span className={`pokecard__stat--value ${firstType}-value`}>{infoStat.base_stat}</span>
                            </li>
                        ))}
                    </ul>
                </section>
        </article>
    )
}
