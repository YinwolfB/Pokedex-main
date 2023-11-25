/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"

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

    return (
        <article className="pokecard" onClick={handleNavigate}>
            <header className="pokecard__header">
                <img className="pokecard__img" src={infoPoke?.sprites.other["official-artwork"].front_default} alt="" /> {/* SE PUEDE USAR TAMBIEN ... infoPoke?.sprites.other["official-artwork"].front_default ... infoPoke?.sprites.other.dream_world.front_default */}
                <section className="pokecard__body">
                    <h3 className="pokecard__name">{infoPoke?.name.charAt(0).toUpperCase() + infoPoke?.name.slice(1)}</h3>
                    <ul className="pokecard__types">
                        {infoPoke?.types.map((infoType, index) => (
                            <li className="pokecard__typesname" key={`${infoType.type.name}-${index}`}> {infoType.type.name}</li>
                        ))}
                    </ul>

                    <hr className="pokecard__hr" />

                    <ul className="pokecard__stats">
                        {infoPoke?.stats.map((infoStat, index) => (
                            <li className="pokecard__stat" key={`${infoStat.stat.name}-${index}`}>
                                <span className="pokecard__stat--name">{infoStat.stat.name}</span>
                                <span className="pokecard__stat--value">{infoStat.base_stat}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </header>
        </article>
    )
}
