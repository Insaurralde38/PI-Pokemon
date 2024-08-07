import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail, clearDetail, deletePokemon } from "../../redux/actions.js";
import { NavBar, Loading } from '../../components';
import typeLogo from "../../components/Card/TypeLogo";
import bgColor from './bgColor.js';
import "./Details.css";

function Details() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detail = useSelector((state) => state.detail);
  const loading = useSelector((state) => state.loading);

  let emojiCount = 1;

  useEffect(() => {
    dispatch(getPokemonDetail(id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);
  
  const styleDetail = {
    background: `linear-gradient(180deg, #ffffff 0%, ${detail.types && detail.types.length > 0 ? bgColor[detail.types[0]] : '#ffffff'} 100%)`,
  };

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deletePokemon(id));
    alert("Pokemon deleted");
    navigate.push("/home");
  };

  const getFormattedId = () => {
    if (detail && detail.id) {
      const actualId = detail.id;
      let str = actualId.toString();
      while (str.length < 4) {
        str = '0' + str;
      }
      return `#${str}`;
    }
    return '';
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <NavBar/>
    <div id="detail" style={styleDetail}>
    <div className='detail-container'>
    <div className="number">{getFormattedId()}</div>    
    <div className="title">
      <div className="subgrid">
        <div>
            {detail.types?.map((type) => {
              const cardLogo = typeLogo[type];
              const emojiClass = emojiCount === 1 ? "emoji" : `emoji-${emojiCount}`;
              emojiCount++;
              return (
                <span id="icon" key={type + id}><img className={emojiClass} src={cardLogo} alt="" /></span>
              );
            })}
        </div>
        <div className="name">{detail.name}</div>
        <div className="details">
          <div className="row">
            <span>Height:</span>
            <span>{detail.height / 10} mts.</span>
          </div>
          <div className="row">
            <span>Weight</span>
            <span>{detail.weight/ 10} Kgs.</span>
          </div>
        </div>
      </div>
      <span className='picture'>
        <img src={detail.imgUrl} alt="" />
      </span>
    </div>
    <div className="stats">
      <div className="title">Stats</div>
      <div className="graphics" >
        <div className="row">
            <div className="name">Hit Points:</div>
            <div className="bar" >
              <div className="inside" style={{ width: `${(detail.hp / 255) * 100}%` }}></div>
            </div>
            <div className="base">{detail.hp}</div>
        </div>
        <div className="row">
            <div className="name">Attack:</div>
            <div className="bar" >
              <div className="inside" style={{ width: `${(detail.attack / 190) * 100}%` }}></div>
            </div>
            <div className="base">{detail.attack}</div>
        </div>
        <div className="row">
            <div className="name">Defense:</div>
            <div className="bar" >
              <div className="inside" style={{ width: `${(detail.defense / 250) * 100}%` }}></div>
            </div>
            <div className="base">{detail.defense}</div>
        </div>
        <div className="row">
            <div className="name">Speed:</div>
            <div className="bar" >
              <div className="inside" style={{ width: `${(detail.speed / 200) * 100}%` }}></div>
            </div>
            <div className="base">{detail.speed}</div>
        </div>
      </div>
    </div>
      { !detail.custom ? null : (<button onClick={(event) => handleDelete(event)}>DELETE</button>) }
    </div>
    </div>
    </div>
  );
}

export default Details;