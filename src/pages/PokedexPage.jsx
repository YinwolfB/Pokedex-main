/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux"
import { useFetch } from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import { PokeCard } from "../components/PokedexPage/PokeCard"
import { SelectType } from "../components/PokedexPage/SelectType"
import './styles/PokedexPage.css'

export const PokedexPage = () => {

    const [inputValue, setInputValue] = useState('')
    const [selectValue, setSelectValue] = useState('allPokemons')
    const trainerName = useSelector(store => store.trainerName)
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20000&offset=0'
    const [pokemons, getPokemons, getByTypeApi] = useFetch(url)


    useEffect(() => {
        if (selectValue === 'allPokemons') {
            getPokemons()
            setPage(1)
        } else {
            getByTypeApi(selectValue)
            setPage(1)
        }
    }, [selectValue])

    const inputSearch = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        setInputValue(inputSearch.current.value.toLowerCase().trim())
        inputSearch.current.value = ''
    }

    const cbFilter = (poke) => {
        //Filtro por nombre en el input
        const nameFiltered = poke.name.includes(inputValue)
        return nameFiltered
    }
    //Paginacion
    const [page, setPage] = useState(1);
    const pokemonsFiltered = pokemons?.results?.filter(cbFilter);

    const totalPokemon = pokemonsFiltered?.length;
    const pokePerPage = 12;
    const quantityPages = Math.ceil(totalPokemon / pokePerPage);

    const showPages = 5; // Número de páginas a mostrar

    let arrPages = [];
    for (let i = Math.max(1, page - Math.floor(showPages / 2)); i <= Math.min(quantityPages, page + Math.floor(showPages / 2)); i++) {
        arrPages.push(i);
    }

    const firstIndex = pokePerPage * (page - 1);
    const finalIndex = pokePerPage * page;

    const isFirstPage = page === 1;
    const isLastPage = page === quantityPages;

    const pagesToShow = 5; // Número de páginas a mostrar
    const halfPagesToShow = Math.floor(pagesToShow / 2);

    // Calcular el rango de páginas a mostrar
    let startPage = Math.max(1, page - halfPagesToShow);
    let endPage = Math.min(startPage + pagesToShow - 1, quantityPages);

    // Ajustar si el rango se sale del límite inferior
    startPage = Math.max(1, endPage - pagesToShow + 1);

    return (
        <div className="pokedex">
            <header className="pokedex__header">
                <img className="pokedex__header--teatle" src="/src/pages/styles/img/title.svg" alt="" />
                <img className="pokedex__header--img" src="/src/pages/styles/img/header.svg" alt="" />
            </header>
            <div className="pokedex__greeting">
                <p className="pokedex__greeting--name">Welcome {trainerName}.</p>
                <span className="pokedex__greeting--find">Here you can find your favorite Pokémon. let's go!</span>
            </div>
            <section className="pokedex__container">
                <form className="pokedex__form" onSubmit={handleSubmit}>
                    <input className="pokedex__input" ref={inputSearch} type="text" />
                    <button className="pokedex__btn">Search</button>
                </form>
                <div className="pokedex__selecttype">
                    <SelectType
                        setSelectValue={setSelectValue}
                    />
                </div>
            </section>
            <div className="pokedex__page">
                {
                    pokemonsFiltered?.slice(firstIndex, finalIndex).map(poke => (
                        <PokeCard
                            key={poke.url}
                            url={poke.url}
                        />
                    ))
                }
            </div>
            <section className="pokedex_paginacion">
                <ul className="paginacion">
                    <li
                        style={{ display: `${isFirstPage ? "none" : "block"}` }}
                        className="paginacion__block"
                        onClick={() => setPage(1)}
                    >
                        1
                    </li>
                    <li
                        style={{ display: `${isFirstPage ? "none" : "block"}` }}
                        className="paginacion__block"
                        onClick={() => setPage(page - 1)}
                    >
                        &lt;
                    </li>
                    {arrPages.map((e) => (
                        <li
                            className={`paginacion__block ${e === page ? "paginacion__block--selected" : ""}`}
                            onClick={() => setPage(e)}
                            key={e}
                        >
                            {e}
                        </li>
                    ))}
                    <li
                        style={{ display: `${isLastPage ? "none" : "block"}` }}
                        className="paginacion__block"
                        onClick={() => setPage(page + 1)}
                    >
                        &gt;
                    </li>
                </ul>
                <p className="total-pages">Total Pages: {quantityPages}</p>
            </section>
        </div>
    )
}
