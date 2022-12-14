import { FaGripLines} from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from 'react';
import { useCard } from '../hooks/useCard';

function Header(props) {
    const {TotalPrice} = useCard();
    return (
<header>
    <Link to="">
        <div className="item hat_item">
            <img src={require('../img/logo.webp')} draggable="false" width="80px"/>
            <h1>MyMusic</h1>
        </div>
    </Link>


    
    <div className="sidebar">
        {/* <Link to="Favorites">
            <FiHeart size="40px"/>
        </Link> */}

        {/* <Link to="Orders">
            <AiOutlineUser size="40px"/>
        </Link> */}
        <h1>Total price: {TotalPrice}</h1>
        <FaGripLines size="40px" color="#252525" className="sidebar_item" onClick={props.OnClickCart}/>
    </div>
</header>
    );
}

export default Header;