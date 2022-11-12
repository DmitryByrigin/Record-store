import React from 'react'
import { AppContext } from '../App';
import { AiOutlineArrowLeft } from "react-icons/ai";



export const Info = ({title, img_url, description}) => {

const {SetCartOpened} = React.useContext(AppContext);

  return (
    <article className="right_menu_item_empty">
        <img height="200px" src={img_url} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => SetCartOpened(false)}>
            <AiOutlineArrowLeft size="30px"/>
            <h2>Come back</h2>
        </button>   
    </article>
  )
}

export default Info;