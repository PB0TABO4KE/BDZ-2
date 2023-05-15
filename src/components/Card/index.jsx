import "./style.css";
import { Link } from "react-router-dom";
import { Heart, HeartFill, Percent } from "react-bootstrap-icons";
import { useState } from "react";

const Card = ({ img, name, price, _id, discount, tags, likes, setServerGoods }) => {
    const [isLike, setIsLike] = useState(likes?.includes(localStorage.getItem("rockId")));
    const updLike = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsLike(!isLike);

        const token = localStorage.getItem("rockToken");
        fetch(`https://api.react-learning.ru/products/likes/${_id}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

            .then(res => res.json())
            .then(data => {
                setServerGoods(function (old) {
                    const arr = old.map(el => {
                        if (el._id === _id) {
                            return data;
                        }
                        else {
                            return el;
                        }
                    })
                    return arr;
                });
            })

    }

    return <Link to={`/product/${_id}`} className="card" >
        {discount > 0 && <span className="card__discount">{discount} <Percent />  </span>}
        <span className="card__like" onClick={updLike}>
            {isLike ?
                <HeartFill /> : <Heart />}
        </span>
        <img src={img} alt="Картинка" className="card__img" />
        <span className="card__name">{name}</span>
        <span className="card__price">
            {discount > 0
                ? <>
                    <del>{price}</del>
                    &nbsp;
                    {price * (100 - discount) / 100}
                </>
                :
                price
            }&nbsp;руб</span>
        <button className="card__btn">В корзину</button>
        {/* <span className="card__tags">
        {tags.map (el => <span key={el}>{el}</span>)}
        </span>*/}
    </Link>
}

export default Card;