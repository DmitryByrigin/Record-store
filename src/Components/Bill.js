import { AiOutlinePlusCircle } from "react-icons/ai";

function Bill() {
    return (
        <><div className="overlay"></div>
        <section className="right_menu">

            <div className="right_menu_item">
                <div className="cross_img">
                    <img src="/img/cross.svg" alt="" />
                </div>
                <h2>Корзина</h2>
                <article className="card_small">
                    <img src="/img/im1.png" alt="" />
                    <h2>Мужские Кроссовки<br />Nike Air Max 270</h2>
                    <h1>12 999 руб.</h1>
                    <AiOutlinePlusCircle size="40px" className="article_cost1_item4" />
                </article>
                <p>Итого:</p>
                <p>Налог 5%:</p>
                <button className="botton_offer"><h2>Офомить заказ</h2></button>
            </div>

        </section></>
    );
}

export default Bill;