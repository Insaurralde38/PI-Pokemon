import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons, getTypes, filterByType, filterCreated, sortByName, sortByAttack, sortByDefense, sortBySpeed, toggleDarkMode  } from '../../redux/actions.js'
import { Card, FilterBar, Loading, Pagination } from '../../components'
import './CardsContainer.css';

function CardsContainer() {

  // loading
  const loading = useSelector(state => state.loading);
  const [isLoading, setLoading] = useState(false)

  // pagination elements:
  const pokemons = useSelector(state => state.pokemons);
  const [ pokemonsPerPage ] = useState(12);
  const [ currentPage, setCurrentPage ] = useState(1);
  const last = currentPage * pokemonsPerPage;
  const first = last - pokemonsPerPage;
  const currentPokemons = pokemons.slice(first, last);
  const numberOfPages = pokemons.length / pokemonsPerPage;
  const pagination = (numberPage) => {
    setCurrentPage(numberPage);
    document.getElementById(`${currentPage}`).classList.remove('active');
    document.getElementById(`${numberPage}`).classList.toggle('active');
  }

  //filtering & ordering:

  const dispatch = useDispatch();
  const types = useSelector(state => state.types);
  const [order, setOrder] = useState('');
  console.log(order);

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  // next y previous buttons:

  const handleNext = (event) => {
    event.preventDefault();
    currentPage <= numberOfPages ? setCurrentPage(currentPage + 1) : setCurrentPage(currentPage);
    document.getElementById(`${currentPage}`).classList.remove('active');
    currentPage <= numberOfPages ? document.getElementById(`${currentPage + 1}`).classList.toggle('active') :
      document.getElementById(`${currentPage}`).classList.toggle('active');
  }

  const handlePrevious = (event) => {
    event.preventDefault();
    currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage);
    document.getElementById(`${currentPage}`).classList.remove('active');
    currentPage > 1 ? document.getElementById(`${currentPage - 1}`).classList.toggle('active') :
      document.getElementById(`${currentPage}`).classList.toggle('active');
  }

  // filtering:

  const handleFilterByType = (event) => {
    dispatch(filterByType(event.target.value))
    setCurrentPage(1);
    document.getElementById(`${currentPage}`).classList.remove('active');
    document.getElementById("1").classList.toggle('active');
  }

  const handleFilterCreated = (event) => {
    dispatch(filterCreated(event.target.value))
    setCurrentPage(1);
    document.getElementById(`${currentPage}`).classList.remove('active');
    document.getElementById("1").classList.toggle('active');
  }

  // ordering:

  const handleSortByName = (event) => {
    dispatch(sortByName(event.target.value));
    setOrder(event.target.value);
    setCurrentPage(1);
    document.getElementById(`${currentPage}`).classList.remove('active');
    document.getElementById("1").classList.toggle('active');
  }

  const handleSortByAttack = (event) => {
    dispatch(sortByAttack(event.target.value));
    setOrder(event.target.value);
    setCurrentPage(1);
    document.getElementById(`${currentPage}`).classList.remove('active');
    document.getElementById("1").classList.toggle('active');
  }

  const handleSortByDefense = (event) => {
    dispatch(sortByDefense(event.target.value));
    setOrder(event.target.value);
    setCurrentPage(1);
    document.getElementById(`${currentPage}`).classList.remove('active');
    document.getElementById("1").classList.toggle('active');
  }

  const handleSortBySpeed = (event) => {
    dispatch(sortBySpeed(event.target.value));
    setOrder(event.target.value);
    setCurrentPage(1);
    document.getElementById(`${currentPage}`).classList.remove('active');
    document.getElementById("1").classList.toggle('active');
  }

  // reset:

  const handleReset = (event) => {
    event.preventDefault();
    dispatch(getTypes());
    dispatch(getAllPokemons());
    document.getElementById('order').value = 'order';
    document.getElementById('attack').value = 'attack';
    document.getElementById('defense').value = 'defense';
    document.getElementById('speed').value = 'speed';
    document.getElementById('created').value = 'all';
    document.getElementById('types').value = 'type';
    setCurrentPage(1);
    setLoading(true);
    setTimeout(() => {setLoading(false)}, 2000);
    document.getElementById(`${currentPage}`).classList.remove('active');
    document.getElementById("1").classList.toggle('active');
  }

  return (
    <div>
      <div>
        <FilterBar
          handleSortByName={handleSortByName}
          handleSortByAttack={handleSortByAttack}
          handleSortByDefense={handleSortByDefense}
          handleSortBySpeed={handleSortBySpeed}
          handleFilterByType={handleFilterByType}
          handleFilterCreated={handleFilterCreated}
          handleReset={handleReset}
          types={types}
        />
      </div>
      <div className="container">
        {( !loading || isLoading ) ? <Loading /> : currentPokemons.map(pokemon => {
          return <Card
            key={pokemon.id + pokemon.name}
            id={pokemon.id}
            name={pokemon.name}
            attack={pokemon.attack}
            image={pokemon.imgUrl}
            defense={pokemon.defense}
            speed={pokemon.speed}
            height={pokemon.height}
            weight={pokemon.weight}
            types={pokemon.types}
          />
        })}
      </div>
      <div>
        <Pagination
          pokemonsPerPage={pokemonsPerPage}
          pokemons={pokemons.length}
          pagination={pagination}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
}

export default CardsContainer;
