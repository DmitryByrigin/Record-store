import React from 'react';
import axios from 'axios';
import Card from '../Card/Card'
import { AppContext } from '../../App'


function Orders() {
    const {Favorites, onAddToFavorite, AddToCard} = React.useContext(AppContext);
    const [Orders, SetOrders] = React.useState([]);
    React.useEffect(() => {
        // Самовызывающияся функция
        (async () => {
            try {
                const {data} = await axios.get('https://6317209a82797be77ff41ddf.mockapi.io/orders');
                SetOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                console.log(data);
            }

            catch (error) {
                alert('Ошибка при запросе заказов');
                console.error(error);
            }

        })();

     
    }, []);
    
    //const {Favorites, onAddToFavorite, AddToCard} = React.useContext(AppContext);
    // console.log(Favorites)
    return (
        <main className="item">
            <h1>Мои заказы</h1>
            <article className="favorites">
                
                {Orders
                .map((item, index) => (
                <Card
                key={index}
                title={item.title}
                img_url={item.img_url}
                price={item.price}
                OnFavorite ={(obj) => onAddToFavorite(obj)}
                OnPlus ={(obj) => AddToCard(obj)}
                id = {item.id}
                />
                ))}
        </article>
    </main>
    );
}
    
export default Orders;