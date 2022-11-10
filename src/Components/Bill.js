// import SmallCard from "./SmallCard.js"
import React from "react";
import Info from './Info'
// import App from '../App.js';
// import Card from './Card/Card';
import { useCard } from '../hooks/useCard';
import axios from 'axios'

import styles from '../index.css'



function Bill({OnClickExit, onRemove, items = [], opened}) {
    if (items.length > 0) {
        document.body.style.overflowY = "hidden";
    }
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
        


        }
        catch (error) {
            alert("Не удалось создаь заказ");
        }

    };
    function c() {
        if(opened == true) {
            document.body.style.overflowY = "hidden";
            //console.log(document.body.style)
            return "OverlayVisible"
        } 

        else {
            document.body.style.overflowY = "scroll";
            return "overlay"
        }
    }
    
    // var [isItemAdded, SetItemAdded] = React.useState(true);
    return (
        
        // <div className={`${opened ? 'OverlayVisible' : 'overlay'}`}>
        <div className={`${c()}`}>
        <section className="right_menu">
    
            {items.length > 0 ? 
            <article className="right_menu_item">
                <div className="cross_img">
                    <img onClick={OnClickExit} src={require('../img/btn_deleat.png')} alt="" />
                
                <h2>Корзина</h2>
                </div>
                <div className="all_goods">
                    {items.map((obj) => (
                    <article key={obj.id} className="card_small">
            
                            <img src={require(`../${obj.img_url}`)} alt="" />
                            <h2>{obj.title}</h2>
                            <h1>{obj.price}</h1>
                            {/* {console.log(<h1>{obj.price}</h1>)} */}
                            <div><img onClick={() => onRemove(obj)} src={require('../img/btn_deleat.png')} height="50px" className="article_cost1_item4" /></div>
                        </article>
                    ))}
                </div>
                <h2>Итого: {TotalPrice}</h2>
                <h3>Налог 5%: {(TotalPrice/100*5).toFixed(2)}</h3>
                <button onClick={OnClickOreder} className="botton_offer"><h2>Офомить заказ</h2></button>
            </article>

            :
            <Info title={IsOrderComplete ? "Зказа оформлен" : "Корзина пустая"} 
                  description= {IsOrderComplete ? "Ваш закза скоро будет передан курьрской службе" : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"}  
                  img_url={IsOrderComplete ? require('../img/f1.png') : require('../img/box.png')}/>       

            }
        </section>
        </div>
    );
}

export default Bill;