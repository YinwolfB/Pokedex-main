/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch"

export const PokeInfoCard = ({ url }) => {
    const [infoPoke, getInfoPoke] = useFetch(url)
    const [abilities, setAbilities] = useState('')
    const [types, setTypes] = useState('')
    const [stats, setStats] = useState('')
    const [moves, setMoves] = useState('')

    useEffect(() => {
        getInfoPoke()
    }, [])

    useEffect(() => {
        if (infoPoke) {
            const abilitiesList = infoPoke.abilities.map((ability, index) => ({
                name: ability.ability.name,
                id: index // Usar 'index' como identificador único
            }))
            const typesList = infoPoke.types.map((type, index) => ({
                name: type.type.name,
                id: index // Usar 'index' como identificador único
            }))
            const statsList = infoPoke.stats.map((stat, index) => ({
                name: stat.stat.name,
                baseStat: stat.base_stat,
                id: index // Usar 'index' como identificador único
            }))
            const movesList = infoPoke.moves.map((move, index) => ({
                name: move.move.name,
                id: index // Usar 'index' como identificador único
            }))

            setAbilities(abilitiesList)
            setTypes(typesList)
            setStats(statsList)
            setMoves(movesList)
        }
    }, [infoPoke])

    return (
        <article>
            <article>
                <hr />
                <section>
                    <h3>Abilities</h3>
                    <div>
                        {typeof abilities === 'string' ? <li>{abilities}</li> :
                            abilities.map(ability => (
                                <p key={ability.id}>{ability.name}</p>
                            ))
                        }
                    </div>
                </section>
                <section>
                    <h3>Types</h3>
                    <div>
                        {typeof types === 'string' ? <li>{types}</li> :
                            types.map(type => (
                                <p key={type.id}>{type.name}</p>
                            ))
                        }
                    </div>
                </section>
                <section>
                    <hr />
                    <h4>Stats</h4>
                    <ul>
                        {typeof stats === 'string' ? <li>{stats}</li> :
                            stats.map(stat => (
                                <li key={stat.id}> <span>{stat.name}: </span><span> {stat.baseStat}/150 </span></li>
                            ))
                        }
                    </ul>
                </section>
            </article>
            <article>
                <section>
                    <hr />
                    <h3>Moves</h3>
                    <ul>
                        {typeof moves === 'string' ? <li>{moves}</li> :
                            moves.map(move => (
                                <li key={move.id}> <span>{move.name}</span></li>
                            ))
                        }
                    </ul>
                </section>
            </article>
        </article>
    )
}



