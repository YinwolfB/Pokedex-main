/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"
import './styles/PokeInfoCard.css'

export const PokeInfoCard = ({ url }) => {
    const [infoPoke, getInfoPoke] = useFetch(url);

    useEffect(() => {
        getInfoPoke();
    }, []);

    console.log(infoPoke)

    const maxStatValue = 150;

    const firstType = infoPoke?.types[0].type.name
    const secondType = infoPoke?.types[1].type.name


    console.log(infoPoke)
    return (
        <article className={`pokeinfocard ${firstType}-border`}>
            <section className="pokeinfocard__section1">
                <header className={`pokeinfocard__header ${firstType}-gradient`}>
                    <img className="pokeinfocard__img" src={infoPoke?.sprites.other.dream_world.front_default} alt="" />
                </header>

                <div className="pokeinfocard__basicdata">
                    <h4 className={`pokeinfocard__id ${firstType}-value`}>#{infoPoke?.id}</h4>
                    <h2 className={`pokeinfocard__name ${firstType}-font`}>{infoPoke?.name}</h2>
                    <ul className="pokeinfocard__dimention">
                        <li className="pokeinfocard__dimentionsinfo">
                            <h3 className="pokeinfocard__infow"><span className="pokeinfocard__infow--title">Weight </span><span className="pokeinfocard__infow--value">{infoPoke?.weight}</span></h3>
                            <h3 className="pokeinfocard__infoh"><span className="pokeinfocard__infoh--title">height </span><span className="pokeinfocard__infoh--value">{infoPoke?.height}</span></h3>
                        </li>
                    </ul>
                </div>

                <hr className="pokeinfocard__hr1" />

                <section className="pokeinfocard__containerinfo">
                    <div className="pokeinfocard__containertype">
                        <h3 className="pokeinfocard__titletype">Type</h3>
                        <ul className={`pokeinfocard__type `}>
                            {infoPoke?.types.map((infoType, index) => (
                                <li
                                    className={`pokeinfocard__type--name ${index === 0 ? firstType : secondType}-gradient`}
                                    key={`${infoType.type.name}-${index}`}
                                >
                                    {infoType.type.name}
                                </li>
                            ))}
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
                {/* -------------Inicio Barra de Stats------------- */}
                <section className={`pokeinfocard__statsdata`}>
                    <ul className={`pokeinfocard__stats`}>
                        {infoPoke?.stats.map((infoStat, index) => {
                            const statPercentage = (infoStat.base_stat / maxStatValue) * 100;
/* ${firstType}-value ${secondType}-value */
                            return (
                                <li
                                    className={`pokeinfocard__stat`}
                                    key={`${infoStat.stat.name}-${index}`}
                                >
                                    <h3 className={`pokeinfocard__stat--name ${secondType}-value`}>
                                        <span>{infoStat.stat.name}</span>
                                    </h3>
                                    <div className={`pokeinfocard__stat-bar ${secondType}-value`}>
                                        <div
                                            className={`pokeinfocard__stat-progress`}
                                            style={{ width: `${statPercentage}%` }}
                                        ></div>
                                    </div>
                                    <span className={`pokeinfocard__stat--value ${secondType}-value`}>{infoStat.base_stat}/150</span>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </section>
            <section className="pokeinfocard__section2">
                <h2 className="pokeinfocard__titlemovements">Movements</h2>
                <hr className="pokeinfocard__hr1" />
                <ul className="pokeinfocard__movements">
                    {infoPoke?.moves.map((infoMove, index) => (
                        <li className="pokeinfocard__move" key={`${infoMove.name}-${index}`}>{infoMove.move.name}</li>
                    ))}
                </ul>
            </section>
        </article>
    )
}



