// import SmallCard from "./SmallCard.js"
import React from "react";
import Info from './Info'
// import App from '../App.js';
// import Card from './Card/Card';
import { useCard } from '../hooks/useCard';
import axios from 'axios'



function Bill({OnClickExit, onRemove, items = []}) {
    const {CartItems, SetCartItems, TotalPrice} = useCard();
    var [IsOrderComplete, SetIsOrderComplete] = React.useState(false);

    const [orderID, setOrderId] = React.useState(null);
    
    // const OnClickOreder = () => {
    //     axios.post(`https://6317209a82797be77ff41ddf.mockapi.io/oeders`, CartItems);
    //     SetIsOrderComplete(true);
    //     SetCartItems([]);
    //     console.log(IsOrderComplete);
    // };
    let find1 = "";
    const OnClickOreder = async () => {
        try {
            const {data} = await axios.post(`https://6317209a82797be77ff41ddf.mockapi.io/orders`, {
                items: CartItems,
            });

            SetIsOrderComplete(true);
            setOrderId(data.id);
            SetCartItems([]);
        

        for (let i = 0; i < CartItems.length; i++) {
            const item = CartItems[i];
            // console.log(item.title);
            find1 = CartItems.find(title => title.title === item.title).id
            await axios.delete(`https://6317209a82797be77ff41ddf.mockapi.io/card/${find1}`);
            //await axios.delete(`https://6317209a82797be77ff41ddf.mockapi.io/card/` + item);
        }

        }
        catch (error) {
            alert("Не удалось создаь заказ");
        }

    };
    
    // var [isItemAdded, SetItemAdded] = React.useState(true);
    return (
        
        <><div className="overlay"></div>
        <section className="right_menu">
    
            {items.length > 0 ? 
            <article className="right_menu_item">
                <div className="cross_img">
                    <img onClick={OnClickExit} src="/img/cross.svg" alt="" />
                </div>
                <h2>Корзина</h2>
                    {items.map((obj) => (
                    <article key={obj.id} className="card_small">
                            
                            <img src={obj.img_url} alt="" />
                            <h2>{obj.title}</h2>
                            <h1>{obj.price}</h1>
                            {/* {console.log(<h1>{obj.price}</h1>)} */}
                            <div><img onClick={() => onRemove(obj)} src="./img/btn_deleat.png" height="50px" className="article_cost1_item4" /></div>
                        </article>
                    ))}
                <p>Итого: {TotalPrice}</p>
                <p>Налог 5%: {TotalPrice/100*5}</p>
                <button onClick={OnClickOreder} className="botton_offer"><h2>Офомить заказ</h2></button>
            </article>

            :
            <Info title={IsOrderComplete ? "Зказа оформлен" : "Корзина пустая"} 
                  description= {IsOrderComplete ? "Ваш закза скоро будет передан курьрской службе" : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.Вернуться назад"}  
                  img_url={IsOrderComplete ? "/img/f1.png" : "./img/box.png"}/>        

            }
        </section></>
    );
}

export default Bill;