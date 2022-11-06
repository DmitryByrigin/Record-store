import { FaGripLines} from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import React from 'react';
import { useCard } from '../hooks/useCard';

function Header(props) {
    const {TotalPrice} = useCard();
    return (
<header>
    <Link to="">
        <div className="item hat_item">
            <img src="img/logo.webp" draggable="false" width="80px"/>
            <h1>MyMusic</h1>
        </div>
    </Link>


    
    <div className="sidebar">
        <Link to="Favorites">
            <FiHeart size="40px"/>
        </Link>

        <Link to="Orders">
            <AiOutlineUser size="40px"/>
        </Link>
    <h1>{TotalPrice}</h1>
    <FaGripLines size="40px" color="#252525" className="sidebar_item" onClick={props.OnClickCart}/>
    </div>
</header>
    );
}

export default Header;