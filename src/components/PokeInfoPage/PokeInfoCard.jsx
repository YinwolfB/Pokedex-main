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
        <article>
            <section>
                <header>
                    <img src={infoPoke?.sprites.other.dream_world.front_default} alt="" />
                </header>
                <div>
                    <h4>#{infoPoke?.id}</h4>
                    <h2>{infoPoke?.name}</h2>
                    <ul>
                        <li>
                            <h3><span>Weight </span><span>{infoPoke?.weight}</span></h3>
                            <h3><span>height </span><span>{infoPoke?.height}</span></h3>
                        </li>
                    </ul>
                </div>

                <section>
                    <div>
                        <h3>Type</h3>
                        <ul>
                            {infoPoke?.types.map((infoType, index) => (
                                <li key={`${infoType.type.name}-${index}`}> {infoType.type.name}</li>
                            ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3>Abilities</h3>
                        <ul>
                            {infoPoke?.abilities.map((infoAbility, index) => (
                                <li key={`${infoAbility.ability.name}-${index}`}>{infoAbility.ability.name}</li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section>
                    <ul>
                        {infoPoke?.stats.map((infoStat, index) => (
                            <li key={`${infoStat.stat.name}-${index}`}>
                                <h3> <span>{infoStat.stat.name}</span> </h3>
                                <span>{infoStat.base_stat}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
            <section>
                <h2>Movements</h2>
                <ul>
                    {infoPoke?.moves.map((infoMove, index)=>(
                        <li key={`${infoMove.name}-${index}`}>{infoMove.move.name}</li>
                    ))}
                </ul>
            </section>
        </article>
    )
}



