import React from "react";
import { FaHeart, FaMusic, FaGripLines } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"
import Home from './Components/Pages/Home'
import Favorites1 from './Components/Pages/Favorites'
import Orders from './Components/Pages/Orders'
import Header from './Components/Header'
import Bill from './Components/Bill'
import axios from 'axios'
import { AiOutlineUser } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { BsPlus, BsSearch, BsTranslate } from "react-icons/bs";
import { Routes, Route, Link, useNavigate } from "react-router-dom"




// const arr = [
//   {img_url: "/img/im1.png", title: "Мужские Кроссовки Nike Air Max 270", price: "12 990"},
//   {img_url: "/img/im1.png", title: "Мужские Кроссовки Nike Air Max 250", price: "14 900"},

// ];
export const AppContext = React.createContext({});
function App() {
  let navigate = useNavigate();
  
  // console.log(AppContext);
  const [CartItems, SetCartItems] = React.useState([]);
  const [Favorites, SetFavorites] = React.useState([]);
  const [AddedToCard, SetAddedToCard] = React.useState(false);
  const [IsLoading, SetIsLoading] = React.useState(true);
  const [Items, SetItems] = React.useState([]);
  const [SearchValue, SetSearchValue] = React.useState('');


  const OnCangeSearchInput = (event) => {
    SetSearchValue(event.target.value);
    // console.log(event.target.value);
  };
  let find0
  const onAddToFavoriteApp = (obj) => {

    if (Favorites.find((item) => item.title === obj.title)) {
      SetFavorites((prev) => prev.filter((item) => item.title !== obj.title));

      axios.get('https://6317209a82797be77ff41ddf.mockapi.io/favorites').then((res) => {
        // console.log(res.data.slice(0,99).map((obj) => (obj.id)));
        
          let list = res.data
          find0 = list.find(title => title.title === obj.title).id
          axios.delete(`https://6317209a82797be77ff41ddf.mockapi.io/favorites/${find0}`);
          // console.log("Удалил", obj.title)
        });
      

      // axios.delete(`https://6317209a82797be77ff41ddf.mockapi.io/card/${id}`);
      // SetCartItems((prev) => prev.filter((item) => item.id !== id));

      // console.log("App.js", obj.id);
    }
    else {
      axios.post(`https://6317209a82797be77ff41ddf.mockapi.io/favorites`, obj);
      SetFavorites((prev) =>  [...prev, obj]);
      // console.log("Добавил", obj.title)
    }

    // axios.get('https://6317209a82797be77ff41ddf.mockapi.io/favorites').then((res) => {
    //   // console.log(res.data.slice(0,99).map((obj) => (obj.id)));
    //   SetFavorites(res.data);
    //   console.log("Получил", res.data);
    // });

    // axios.post('https://6317209a82797be77ff41ddf.mockapi.io/favorites', obj);
    // // console.log([...CartItems, obj]);
    // SetFavorites([...Favorites, obj]);
    // console.log("Отправил", [...Favorites, obj]);


    // axios.get('https://6317209a82797be77ff41ddf.mockapi.io/favorites').then((res) => {
    //   // console.log(res.data.slice(0,99).map((obj) => (obj.id)));
    //   SetFavorites(res.data);
    //   console.log("Получил", res.data);
    // });


  }

  let find2
  const onAddToFavorite = async (obj) => {

    try {
      if (Favorites.find((FaObj) => FaObj.title === obj.title)) {
        SetFavorites((prev) => prev.filter((item) => item.title !== obj.title));
        axios.get('https://6317209a82797be77ff41ddf.mockapi.io/favorites').then((res) => {
        // console.log(res.data.slice(0,99).map((obj) => (obj.id)));
        
          let list = res.data
          find2 = list.find(title => title.title === obj.title).id
          axios.delete(`https://6317209a82797be77ff41ddf.mockapi.io/favorites/${find2}`);
          // console.log("Удалил", obj.title)
        });
        
        

        // axios.delete(`https://6317209a82797be77ff41ddf.mockapi.io/card/${id}`);
        // SetCartItems((prev) => prev.filter((item) => item.id !== id));

        // console.log("App.js", obj.id);
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
let find1=""

const AddToCard = (obj) => {
    if (CartItems.find((item) => item.title === obj.title)) {
      SetCartItems((prev) => prev.filter((item) => item.title !== obj.title));

      axios.get('https://6317209a82797be77ff41ddf.mockapi.io/card').then((res) => {
        // console.log(res.data.slice(0,99).map((obj) => (obj.id)));
        
          let list = res.data
          find1 = list.find(title => title.title === obj.title).id
          axios.delete(`https://6317209a82797be77ff41ddf.mockapi.io/card/${find1}`);
          // console.log("Удалил", obj.title)
          //isItemAdded(find1)
        });
      

      // axios.delete(`https://6317209a82797be77ff41ddf.mockapi.io/card/${id}`);
      // SetCartItems((prev) => prev.filter((item) => item.id !== id));

      // console.log("App.js", obj.id);
    }
    else {
      axios.post(`https://6317209a82797be77ff41ddf.mockapi.io/card`, obj);
      SetCartItems((prev) =>  [...prev, obj]);
      // AddedToCard = true;
      // SetAddedToCard = AddedToCard;
      // console.log("Добавил", obj)
    }

}

// const isItemAdded = (id) => {
//   //console.log(find1)
//   return CartItems.some((obj) => Number(obj.id) === Number(id));
// }
//const itemsResponse = ""
React.useEffect(() => {
  document.title = 'Record store';
// НЕ УДАЛЯТЬ! Работа с базой данных без библиотеки функция fetch
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
  //navigate("");
  navigate("/");
// Работа с базой данных с помощью библиотеки axios
  
  async function fetchData() {
    const itemsResponse = await axios.get('https://6317209a82797be77ff41ddf.mockapi.io/items')

    const cardResponse = await axios.get('https://6317209a82797be77ff41ddf.mockapi.io/card')

    const favoritesResponse = await axios.get('https://6317209a82797be77ff41ddf.mockapi.io/favorites')
    // console.log("App:", IsLoading);
    SetIsLoading(false);
    // console.log(cardResponse.data);
    SetCartItems(cardResponse.data);
    SetFavorites(favoritesResponse.data);
    SetItems(itemsResponse.data);
    
  }
 
  fetchData();
}, []);



const isItemAdded = (obj) => {
  let a = CartItems.map((obj1) => obj1.title);
  //console.log(find1)
  // console.log(obj);
  return a.some((item) => item === obj);
  //console.log(CartItems.map((obj1) => obj1.title));
  //return CartItems.some((obj) => Number(obj.id) === Number(id));
  
}




  // const OnRemoveItems = (id) => {
  //   // console.log(id);
  //   axios.delete(`https://6317209a82797be77ff41ddf.mockapi.io/card/${id}`);
  //   SetCartItems((prev) => prev.filter((item) => item.id !== id));
  //   // console.log(SetCartItems((prev) => prev.filter((item) => item.id !== id)));
  //   // console.log(res.data.slice(0,99).map((obj) => (obj.id)));


  // }; 

  const OnRemoveItems = (obj) => {



    if (CartItems.find((item) => item.title === obj.title)) {
      SetCartItems((prev) => prev.filter((item) => item.title !== obj.title));

      axios.get('https://6317209a82797be77ff41ddf.mockapi.io/card').then((res) => {
        // console.log(res.data.slice(0,99).map((obj) => (obj.id)));
        
          let list = res.data
          find1 = list.find(title => title.title === obj.title).id
          axios.delete(`https://6317209a82797be77ff41ddf.mockapi.io/card/${find1}`);
          console.log("Удалил", obj.title)
          //isItemAdded(find1)
        });
      

      // axios.delete(`https://6317209a82797be77ff41ddf.mockapi.io/card/${id}`);
      // SetCartItems((prev) => prev.filter((item) => item.id !== id));

      // console.log("App.js", obj.id);
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

  var [CartOpened, SetCartOpened] = React.useState(false);
  return (
    <AppContext.Provider value={{CartItems, Favorites, Items, isItemAdded, onAddToFavorite, AddToCard, SetCartOpened, SetCartItems}}>
    <div className="wrapper">
      <Bill  items={CartItems} OnClickExit = {() => SetCartOpened(false)} onRemove={OnRemoveItems} opened={CartOpened}/>
      
      <Header OnClickCart = {() => SetCartOpened(true)}/>

      {/* <nav>
     
      <div className="item">
        <ul className="item nav_item">
          <li><h3><a href="#">Пункт меню</a></h3></li>
          <li><h3><a href="#">Пункт меню</a></h3></li>
          <li><h3><a href="#">Пункт меню</a></h3></li>
          <li><h3><a href="#">Пункт меню</a></h3></li>
          <li><h3><a href="#">Пункт меню</a></h3></li>
          <li><h3><a href="#">Пункт меню</a></h3></li>
        </ul>
      </div>



      </nav> */}
      
      <aside>
        <section className="all_aside_item">
          <article>
          <Link className="item aside_item" to="Favorites">
            <FiHeart size="40px"/>
            <h3>Мне нравится</h3>
          </Link>
          </article>

          <article>
            <Link className="item aside_item" to="Orders">
            <AiOutlineUser size="45px"/>
            <h3>Мои заказы</h3>
            </Link> 
          </article>
        </section>
      </aside>

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

      <Routes>
        <Route path="" exact
        element=
        {<Home
          OnCangeSearchInput = {OnCangeSearchInput}
          SearchValue = {SearchValue}
          SetSearchValue = {SetSearchValue}
          Items = {Items}
          CartItems = {CartItems}
          onAddToFavoriteApp = {onAddToFavoriteApp}
          AddToCard = {AddToCard}
          SetItems = {SetItems}
          AddedToCard = {AddedToCard}
          Favorites={Favorites}
          IsLoading={IsLoading}
        
        />} />
      </Routes>


      <footer>
        {/* <article className="item counter">
          
          <h3>{count}</h3>
          <button onClick={Plus}>+</button>
          <button onClick={Minus}>-</button>
        </article> */}
      </footer>

    </div>
    </AppContext.Provider>
  );
}

export default App;
