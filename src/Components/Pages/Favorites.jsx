import React from 'react';

import Card from '../Card/Card'
import { AppContext } from '../../App'


function Favorites() {
    
    const {Favorites, onAddToFavorite, AddToCard} = React.useContext(AppContext);
    // console.log(Favorites)
    return (
        <main className="item">
            <h1>Избранное</h1>
            <article className="favorites">
                
                {Favorites
                .map((item, index) => (
                <Card
                key={index}
                title={item.title}
                img_url={item.img_url}
                price={item.price}
                OnFavorite ={onAddToFavorite}
                OnPlus ={AddToCard}
                Favorited = {true}
                id = {item.id}
                />
                ))}
        </article>
    </main>
    );
}
    
export default Favorites;