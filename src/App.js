function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="item hat_item">
          <img src="/img/logo.webp" draggable="false" width="80px"/>
          <h1>MyMusic</h1>
        </div>
      </header>
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
            <i className="fa-solid love fa-heart fa-xl"></i>
            <h3><a href="">Мне нравится</a></h3>
          </article>

          <article className="item aside_item">
            <i className="fa-solid playlist fa-music fa-xl"></i>
            <h3><a href="">Плейлист дня</a></h3>
          </article>

          <article className="item aside_item">
            <i className="fa-solid srtting fa-gear fa-xl"></i>
            <h3><a href="">Настройки</a></h3>
          </article>
        </section>
      </aside>

      <main className="item">
        <section className="item">

          <article>
            <div className="item article_item2">
              <h3>Осн. конт</h3>
            </div>
            
          </article>

         
        </section>
      </main>

      <footer>
        <div className="item footer_item">Футер</div>
      </footer>

    </div>
  );
}

export default App;
