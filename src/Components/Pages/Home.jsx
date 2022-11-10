import React from "react";
import Card from '../Card/Card';
import { BsPlus, BsSearch } from "react-icons/bs";
import { AppContext } from "../../App";



function Home({OnCangeSearchInput, SearchValue, SetSearchValue, Favorites, Items, IsLoading, AddedToCard, onAddToFavoriteApp, CartItems, AddToCard}) {
  let arr1 = ["Мужские Кроссовки Nike Blazer Mid Suede", 1]
  let arr2 = [1, "Мужские Кроссовки Nike Blazer Mid Suede"]
  let a = CartItems.map((item => item.title))
  let b = Items.map((item) => item.title)

  const { isItemAdded } = React.useContext(AppContext);
  const RenderItems = () => {
    
    const filtredItems = Items.filter((item) =>
      item.title.toLowerCase().includes(SearchValue.toLowerCase()),
    );
    return (IsLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}

        OnFavorite ={(obj) => onAddToFavoriteApp(obj)}
        // OnFavorite ={CartItems}
        OnPlus ={(obj) => AddToCard(obj)}
        // Favorited={(obj) => console.log(obj)}
        // Favorited={Favorites.some((obj)=>obj.title===item.title)}
        // AddedToCard={console.log(CartItems.some((obj)=>obj.title === Items.map((item) => item.title)))}
        // AddedToCard={CartItems.some((obj) => obj.title === b[0])}
        //AddedToCard={isItemAdded(item && item.id)}
        //AddedToCard={isItemAdded(item && item.title)}
        AddedToCard={isItemAdded()}
        Loading = {IsLoading}
        {...item}
        />
      ));
    };

    return (
        <main className="item">
        <div className="search">
          <BsSearch/> 
          <input onChange={OnCangeSearchInput} value={SearchValue} placeholder="Поиск..." type="text" />
          {SearchValue ? <img src={require('../../img/btn_deleat.png')} style={{cursor: "pointer"}} height="35px" onClick={() => SetSearchValue('')}/> : null}
        </div>
        <h1>{SearchValue ? `Поиск по запросу: "${SearchValue}"` : 'Все кроссовки'}</h1>
        <section className="item card_items">

          {RenderItems()}


        </section>
      </main>
    );
}
    
export default Home;