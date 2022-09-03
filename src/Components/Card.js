import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

function Card() {
    return (
        <article className="item article_cost1">
            <FiHeart  size="40px" className="article_cost1_item2"/>
            <img src="/img/im1.png" alt="" />
            <h3>Мужские Кроссовки<br/>Nike Air Max 270</h3>
            <p>ЦЕНА:</p>
            <h3>12 999 руб.</h3>
            <AiOutlinePlusCircle size="40px" className="article_cost1_item1"/>
        </article>
    );
}


export default Card;