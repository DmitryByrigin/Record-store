import React from "react";
import Info from './Info'
import { useCard } from '../hooks/useCard';
import axios from 'axios'
import { AppContext } from "../App";


function Bill({OnClickExit, onRemove, items = [], opened}) {
    
    const { IsOrderComplete, Items, SetIsOrderComplete } = React.useContext(AppContext);
    if (items.length > 0) {
        document.body.style.overflowY = "hidden";
    }

    const {CartItems, SetCartItems, TotalPrice} = useCard();

    

    const [orderID, setOrderId] = React.useState(null);
    
    // const OnClickOreder = () => {
    //     axios.post(`https://6317209a82797be77ff41ddf.mockapi.io/oeders`, CartItems);
    //     SetIsOrderComplete(true);
    //     SetCartItems([]);
    //     console.log(IsOrderComplete);
    // };

    // const OnClickOreder = async () => {
    //     try {
    //         const {data} = await axios.post(`https://6317209a82797be77ff41ddf.mockapi.io/orders`, {
    //             items: CartItems,
    //         });

    //         console.log("до:", IsOrderComplete);
    //         // IsOrderComplete(true)
    //         SetIsOrderComplete(true);
    //         setOrderId(data.id);
    //         SetCartItems([]);
    //         console.log("после:", IsOrderComplete);
        


    //     }
    //     catch (error) {
    //         alert("Не удалось создаь заказ");
    //     }

    //     // SetIsOrderComplete(false);

    // };

    const OnClickOreder = async (filter) => {
        try {
            const {data} = await axios.post(`https://6317209a82797be77ff41ddf.mockapi.io/orders`, {
                items: CartItems,
            });

            console.log("до:", IsOrderComplete);
            // IsOrderComplete(true)
            SetIsOrderComplete(true);
            setOrderId(data.id);
            for(let i = 1; i<8; i++) {
                axios.delete(`https://6317209a82797be77ff41ddf.mockapi.io/card/${i}`);
            }
           
            SetCartItems([]);
            console.log("после:", IsOrderComplete);
        
            // let Items_map = Items.map((obj1) => obj1.title);
            // console.log("Items_map: ",Items_map);
        
            // let CartItems_map = CartItems.map((obj1) => obj1.title);
            // console.log("CartItems_map: ", CartItems_map);
        
            // if (CartItems_map.some((item) => item === Items_map)) {
            //     // SetCartItems((prev) => prev.filter((item) => item.title !== Items_map));
            
            //     axios.get('https://6317209a82797be77ff41ddf.mockapi.io/card').then((res) => {
            //       // console.log(res.data.slice(0,99).map((obj) => (obj.id)));
                  
            //         let list = res.data
            //         filter = list.find(title => title.title === Items_map).id
            //         axios.delete(`https://6317209a82797be77ff41ddf.mockapi.io/card/${filter}`);
            //         console.log("Удалил", Items_map)
            //         //isItemAdded(find1)
            //       });
            //   }

            //   console.log(Items_map)
              

        }
        catch (error) {
            alert("Не удалось создаь заказ");
        }

        // SetIsOrderComplete(false);

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
                
                <h2>Cart</h2>
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
                <h2>Total: {TotalPrice}</h2>
                <h3>Tax 5%: {(TotalPrice/100*5).toFixed(2)}</h3>
                <button onClick={OnClickOreder} className="botton_offer"><h2>Place an order</h2></button>
            </article>

            :
            <Info title={IsOrderComplete ? "Order completed" : "Cart is empty"} 
                  description= {IsOrderComplete ? "Your order will soon be transferred to the courier service" : "Add at least one pair of sneakers to order"}  
                  img_url={IsOrderComplete ? require('../img/f1.png') : require('../img/box.png')}/>       

            }
        </section>
        </div>
    );
}

export default Bill;