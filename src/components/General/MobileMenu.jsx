import { HouseFill, CardList, Heart, Bag, PersonCircle } from "react-bootstrap-icons";
// иконки можно найти тут https://icons.getbootstrap.com/ //
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import login_ico from "../../assets/icons/login_ico.svg";

const MobileMenu = ({ user, setModalActive }) => {
    const navigate = useNavigate();
    const logIn = (e) => {
        e.preventDefault();
        setModalActive(true);
        navigate("/profile")
    }
    return (
        <nav className="mobile__menu">
            {user && <>
                <Link to="/" title="Главная">
                    <div className="mobile__menu__item"><HouseFill /></div>
                    <div className="mobile__menu__item"><span>Главная</span></div> </Link>
                <Link to="/catalog" title="Каталог">
                    <div className="mobile__menu__item"><CardList /></div>
                    <div className="mobile__menu__item"><span>Каталог</span></div></Link>
                <Link to="/" title="Корзина">
                    <div className="mobile__menu__item"><Bag /></div>
                    <div className="mobile__menu__item"><span>Корзина</span></div></Link>
                <Link to="/" title="Избранное">
                    <div className="mobile__menu__item"><Heart /></div>
                    <div className="mobile__menu__item"><span>Избранное</span></div></Link>
                <Link to="/profile" title="Профиль">
                    <div className="mobile__menu__item"><PersonCircle /></div>
                    <div className="mobile__menu__item"><span>Профиль</span></div></Link>
            </>}
            {!user && <Link to="" title="Войти"
                className="mobile__menu__item mobile__menu__login"
                onClick={logIn}>
                <img src={login_ico}
                className="mobile__menu__item" alt="Войти" />Войти</Link>}
        </nav>
    )
}







export default MobileMenu;