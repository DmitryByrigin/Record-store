import React from "react";
import Home from './Components/Pages/Home'
import Favorites1 from './Components/Pages/Favorites'
import Orders from './Components/Pages/Orders'
import Header from './Components/Header'
import Bill from './Components/Bill'
import axios from 'axios'
import { AiOutlineUser } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { Routes, Route, Link, useNavigate } from "react-router-dom"


export const AppContext = React.createContext({});
function App() {
  var [IsOrderComplete, SetIsOrderComplete] = React.useState(false);
  // Проверяем закрыта корзина или открыта
  const [CartOpened, SetCartOpened] = React.useState(false);

  // useNavigate редерект с https://dmitrybyrigin.github.io/Record-store/
  // на главную https://dmitrybyrigin.github.io/
  let navigate = useNavigate();

  // CartItems - корзина
  const [CartItems, SetCartItems] = React.useState([]);

  const [Favorites, SetFavorites] = React.useState([]);
  // const [AddedToCard, SetAddedToCard] = React.useState(false);

  // IsLoading - Включение загрузуи страницы
  const [IsLoading, SetIsLoading] = React.useState(true);

  // Items - товары из мокапи
  const [Items, SetItems] = React.useState([]);
  const [SearchValue, SetSearchValue] = React.useState('');

  // Смотрим что пишет пользователь
  const OnCangeSearchInput = (event) => {
    SetSearchValue(event.target.value);
    // console.log(event.target.value);
  };

  // Удаление и добовление "favorites" с главной страницы и со строницы "favorites"

  const onAddToFavorite = async (obj, filter) => {

    try {
      if (Favorites.find((FaObj) => FaObj.title === obj.title)) {
        SetFavorites((prev) => prev.filter((item) => item.title !== obj.title));
        axios.get('https://6317209a82797be77ff41ddf.mockapi.io/favorites').then((res) => {
        // console.log(res.data.slice(0,99).map((obj) => (obj.id)));
        
          let list = res.data
          filter = list.find(title => title.title === obj.title).id
          axios.delete(`https://6317209a82797be77ff41ddf.mockapi.io/favorites/${filter}`);
          // console.log("Удалил", obj.title)
        });
      }
      else {
        const {data} = await axios.post(`https://6317209a82797be77ff41ddf.mockapi.io/favorites`, obj);
        SetFavorites((prev) =>  [...prev, data]);
      }
    }

    catch (error) {
      alert("Не удалось добавить в favorite");
    }


  }

// Добовление и удаление товара из корзины
const AddToCard = (obj, filter) => {
    SetIsOrderComplete(false);
    console.log(IsOrderComplete);
    if (CartItems.find((item) => item.title === obj.title)) {
      SetCartItems((prev) => prev.filter((item) => item.title !== obj.title));

      axios.get('https://6317209a82797be77ff41ddf.mockapi.io/card').then((res) => {
        // console.log(res.data.slice(0,99).map((obj) => (obj.id)));
        
          let list = res.data
          filter = list.find(title => title.title === obj.title).id
          axios.delete(`https://6317209a82797be77ff41ddf.mockapi.io/card/${filter}`);
          // console.log("Удалил", obj.title)
        });
    }
    else {
      axios.post(`https://6317209a82797be77ff41ddf.mockapi.io/card`, obj);
      SetCartItems((prev) =>  [...prev, obj]);
      // console.log("Добавил", obj)
    }

}

// useEffect функция которая исполняется только один раз при загрузке проекта
React.useEffect(() => {
  document.title = 'Record store';
// Work with database without library, fetch function
  // fetch('https://6317209a82797be77ff41ddf.mockapi.io/items')
  // .then((res) => {
  //   return res.json();
  // })

  // .then((json) => {
  //   SetItems(json);
  // });

  // if (<Routes> <Route path="http://localhost:3000/first_react_app" exact/></Routes>) {
  //   <Link to=""></Link>
  //   console.log("На главной")
  // }

// При запуске проекта нас переадресует на главную страницу
  navigate("/");

// Working with a data base using the axios library
  
  async function fetchData() {
    const itemsResponse = await axios.get('https://6317209a82797be77ff41ddf.mockapi.io/items')

    const cardResponse = await axios.get('https://6317209a82797be77ff41ddf.mockapi.io/card')

    const favoritesResponse = await axios.get('https://6317209a82797be77ff41ddf.mockapi.io/favorites')

    SetIsLoading(false);
    SetCartItems(cardResponse.data);
    SetFavorites(favoritesResponse.data);
    SetItems(itemsResponse.data); 
  }
 
  fetchData();
}, []);


// Сохронение состояния добовления состояния товара (добавлен/ не добавлен) галочка
const isItemAdded = (obj, CartItems_map) => {
  CartItems_map = CartItems.map((obj1) => obj1.title);
  // console.log(CartItems_map.some((item) => item === obj))
  return CartItems_map.some((item) => item === obj);
}

const isItemFavorited = (obj, Favorited_map) => {
  Favorited_map = Favorites.map((obj1) => obj1.title);
  return Favorited_map.some((item) => item === obj);
}




const OnRemoveItems = (obj, filter) => {

  if (CartItems.find((item) => item.title === obj.title)) {
    SetCartItems((prev) => prev.filter((item) => item.title !== obj.title));

    axios.get('https://6317209a82797be77ff41ddf.mockapi.io/card').then((res) => {
      // console.log(res.data.slice(0,99).map((obj) => (obj.id)));
      
        let list = res.data
        filter = list.find(title => title.title === obj.title).id
        axios.delete(`https://6317209a82797be77ff41ddf.mockapi.io/card/${filter}`);
        console.log("Удалил", obj.title)
        //isItemAdded(find1)
      });
  }
}; 

  // Test counter
  // const [count, setCount] = React.useState(0);

  // const Plus = () => {
  //   setCount(count+1);
  // };
  // // console.log(setCount);

  // const Minus = () => {
  //   setCount(count-1);
  // };

  
  return (
    // Создаём глобальные переменные, которые можем использовать в других файлах/компонетнах
    <AppContext.Provider value={{CartItems, Favorites, Items, isItemAdded, isItemFavorited, onAddToFavorite, AddToCard, SetCartOpened, SetCartItems, IsOrderComplete, SetIsOrderComplete}}>

    <div className="wrapper">
      {/* Боковая панель */}
      <Bill  items={CartItems} OnClickExit = {() => SetCartOpened(false)} onRemove={OnRemoveItems} opened={CartOpened}/>
      
      <Header OnClickCart = {() => SetCartOpened(true)}/>
      
      <aside>
        <section className="all_aside_item">
          <article>
          <Link className="item aside_item" to="Favorites">
            <FiHeart size="40px"/>
            <h3>Favorites</h3>
          </Link>
          </article>

          <article>
            <Link className="item aside_item" to="Orders">
            <AiOutlineUser size="45px"/>
            <h3>My orders</h3>
            </Link> 
          </article>
        </section>
      </aside>
    {/* Навигация по сайту (до Favorites) */}
      <Routes>
        <Route path="Favorites" exact element=
        {<Favorites1
          SearchValue = {SearchValue}
          SetItems = {SetItems}
          Favorited = {false}
          
        />} />

        <Route path="Orders" exact element=
        {<Orders
          
        />} />
        
      </Routes>
    
    {/* Назначаем главную страницу */}
      <Routes>
        <Route path="" exact
        element=
        {<Home
          OnCangeSearchInput = {OnCangeSearchInput}
          SearchValue = {SearchValue}
          SetSearchValue = {SetSearchValue}
          Items = {Items}
          CartItems = {CartItems}
          onAddToFavorite = {onAddToFavorite}
          AddToCard = {AddToCard}
          SetItems = {SetItems}
          // AddedToCard = {AddedToCard}
          Favorites={Favorites}
          IsLoading={IsLoading}
        
        />} />
      </Routes>


      <footer>
        <article className="item counter">
          <h3>Copyright © {(new Date().getFullYear())} «Record-store»</h3>
        </article>
      </footer>

    </div>
    </AppContext.Provider>
  );
}

export default App;
