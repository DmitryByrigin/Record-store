import { FaHeart, FaMusic, FaGripLines } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Card from './Components/Card';
import Header from './Components/Header'
import Bill from './Components/Bill'

import { BsSearch } from "react-icons/bs";


function App() {
  return (
    <div className="wrapper">
      <Bill/>
      <Header/>
      <nav>
     
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
      
      </nav>
      
      <aside>
        <section className="item">
          <article className="item aside_item">
            {/* <i className="fa-solid love fa-heart fa-xl"></i> */}
              <FaHeart/>
            <h3><a href="">Мне нравится</a></h3>
          </article>

          <article className="item aside_item">
            {/* <i className="fa-solid playlist fa-music fa-xl"></i> */}
            <FaMusic size="20px" color="#3B49DF"/>
            <h3><a href="">Плейлист дня</a></h3>
          </article>

          <article className="item aside_item">
            {/* <i className="fa-solid srtting fa-gear fa-xl"></i> */}
            <IoMdSettings/>
            <h3><a href="">Настройки</a></h3>
          </article>
        </section>
      </aside>

      <main className="item">
        <div className="search">
          <BsSearch/>
          <input placeholder="Поиск..." type="text" />
        </div>
        <section className="item card_items">

        <Card/>
        <Card/>
        <Card/>

        </section>
      </main>

      <footer>
        <div className="item footer_item">Футер</div>
      </footer>

    </div>
  );
}

export default App;
