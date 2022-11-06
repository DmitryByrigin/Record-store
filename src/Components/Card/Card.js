import React, { useState } from "react";
// import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import CardStyles from './Card.module.css';
import ContentLoader from "react-content-loader"
import { AppContext } from "../../App";

function Card({id, title, img_url, price, OnFavorite, OnPlus, Loading, AddedToCard, Favorited = false}) {
    // var [isAdded, SetAdded] = React.useState(AddedToCard);
    const { isItemAdded } = React.useContext(AppContext);
    function OnClickPlus() {
        // isAdded = !isAdded;
        
        // AddedToCard = isAdded;
        OnPlus({title, img_url, price, AddedToCard, id});
        //isItemAdded({title, img_url, price, AddedToCard, id});
        // console.log("AddedToCard:", AddedToCard);
        // SetAdded(AddedToCard);
       

        

    }

    const [IsFavorite, SetIsFavorite] = React.useState(Favorited);
    // React.useEffect(() => {
    //     console.log("переменная изменилась");
    // }, [isAdded]);
    // var AllItems =  [props.title, props.img_url, props.price];
    function OnClickFavorite() {
        SetIsFavorite(!IsFavorite);
        Favorited = IsFavorite;
        OnFavorite({title, img_url, price, Favorited, id});
        
        // console.log("Card.js", id);
        // console.log(Favorited);
        
    }
    // console.log(Loading)
    return (
        Loading ? 
            <ContentLoader 
            speed={2}
            width={285}
            height={400}
            viewBox="0 0 285 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="10" ry="10" width="285" height="230" /> 
            <rect x="0" y="244" rx="10" ry="10" width="285" height="45" /> 
            <rect x="0" y="269" rx="10" ry="10" width="100" height="15" /> 
            <rect x="0" y="300" rx="10" ry="10" width="55" height="25" /> 
            <rect x="243" y="330" rx="10" ry="10" width="40" height="40" /> 
            <rect x="1" y="345" rx="10" ry="10" width="65" height="25" />
          </ContentLoader> :

          <article className={CardStyles.article_cost1}>
          <button onClick={OnClickFavorite}>
          {IsFavorite ? <img style={{width:'40px'}} src={require('../../img/liked.png')} alt=""/> :
          <FiHeart  size="40px" className={CardStyles.article_cost1_item2} />}
          </button>
              <img src={require(`../../${img_url}`)} alt="" />
              <h3>{title}</h3>
              <p>ЦЕНА:</p>
              <h3>{price}</h3>
              <button className={CardStyles.plus_button} onClick={OnClickPlus}>
              {/* <AiOutlinePlusCircle size="40px" className={CardStyles.article_cost1_item1} onClick={AddCard}/>  */}
              <img style={{width:'40px'}} className={CardStyles.article_cost1_item1} src={isItemAdded(title) ? require('../../img/btn_cheak.png') : require('../../img/btn_add.png')} alt=""/>
          </button>
      </article>
        
    );
}


export default Card;