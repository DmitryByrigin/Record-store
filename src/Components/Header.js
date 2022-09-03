import { FaGripLines } from "react-icons/fa";

function Header() {
    return (
<header>
    <div className="item hat_item">
        <img src="/img/logo.webp" draggable="false" width="80px"/>
        <h1>MyMusic</h1>
    </div>

    <div className="sidebar">
    <FaGripLines size="40px" color="#252525" className="sidebar_item"/>
    </div>
</header>
    );
}

export default Header;