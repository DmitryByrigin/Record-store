import { AiOutlinePlusCircle } from "react-icons/ai";


function SmallCard(props) {
    // console.log(props.img_url);
    return (
        <article className="card_small">
            <img src={props.img_url} alt="" />
            <h2>{props.title}</h2>
            <h1>{props.price}</h1>
            <AiOutlinePlusCircle size="40px" className="article_cost1_item4" />
        </article>
    );
}
    
export default SmallCard;