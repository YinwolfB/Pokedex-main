/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"

export const PokeInfoCard = ({ url }) => {
    const [infoPoke, getInfoPoke] = useFetch(url);

    useEffect(() => {
        getInfoPoke();
    }, []);

    console.log(infoPoke)
    return (
        <article className="pokeinfocard">
            <section className="pokeinfocard__section1">
                <header className="pokeinfocard__header">
                    <img className="pokeinfocard__img" src={infoPoke?.sprites.other.dream_world.front_default} alt="" />
                </header>

                <div className="pokeinfocard__baiscdata">
                    <h4 className="pokeinfocard__id">#{infoPoke?.id}</h4>
                    <h2 className="pokeinfocard__name">{infoPoke?.name}</h2>
                    <ul className="pokeinfocard__dimention">
                        <li className="pokeinfocard__dimentionsinfo">
                            <h3 className="pokeinfocard__infow"><span className="pokeinfocard__infow--title">Weight </span><span className="pokeinfocard__infow--value">{infoPoke?.weight}</span></h3>
                            <h3 className="pokeinfocard__infoh"><span className="pokeinfocard__infoh--title">height </span><span className="pokeinfocard__infoh--value">{infoPoke?.height}</span></h3>
                        </li>
                    </ul>
                </div>

                <section className="pokeinfocard__containerinfo">
                    <div className="pokeinfocard__containertype">
                        <h3 className="pokeinfocard__titletype">Type</h3>
                        <ul className="pokeinfocard__type">
                            {infoPoke?.types.map((infoType, index) => (
                                <li className="pokeinfocard__type--name" key={`${infoType.type.name}-${index}`}> {infoType.type.name}</li>
                            ))
                            }
                        </ul>
                    </div>
                    <div className="pokeinfocard__containerabilities">
                        <h3 className="pokeinfocard__titleabilities">Abilities</h3>
                        <ul className="pokeinfocard__abilities">
                            {infoPoke?.abilities.map((infoAbility, index) => (
                                <li className="pokeinfocard__abilities--name" key={`${infoAbility.ability.name}-${index}`}>{infoAbility.ability.name}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="pokeinfocard__statsdata">
                    <ul className="pokeinfocard__stats">
                        {infoPoke?.stats.map((infoStat, index) => (
                            <li className="pokeinfocard__stat" key={`${infoStat.stat.name}-${index}`}>
                                <h3 className="pokeinfocard__stat--name"> <span>{infoStat.stat.name}</span> </h3>
                                <span className="pokeinfocard__stat--value">{infoStat.base_stat}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
            <section className="pokeinfocard__section2">
                <h2 className="pokeinfocard__titlemovements">Movements</h2>
                <ul className="pokeinfocard__movements">
                    {infoPoke?.moves.map((infoMove, index)=>(
                        <li className="pokeinfocard__move" key={`${infoMove.name}-${index}`}>{infoMove.move.name}</li>
                    ))}
                </ul>
            </section>
        </article>
    )
}



