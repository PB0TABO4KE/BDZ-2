import PromoFlex from "../components/PromoFlex/PromoFlex";
import banner_pic_1 from "../assets/images/banner_pic_1.png";
import banner_pic_2 from "../assets/images/banner_pic_2.png";
import banner_pic_3 from "../assets/images/banner_pic_3.png";
import banner_pic_4 from "../assets/images/banner_pic_4.png";
import banner_pic_5 from "../assets/images/banner_pic_5.png";
import banner_pic_6 from "../assets/images/banner_pic_6.png";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import login_ico from "../assets/icons/login_ico.svg"


const Main = ({ goods, setServerGoods, user, setModalActive }) => {
    const navigate = useNavigate();
    const logIn = (e) => {
        e.preventDefault();
        setModalActive(true);
        navigate("/profile")
    }

    return (<>

        {user && <>
            <h1>Главная</h1>

            <PromoFlex type="lg" header="Подарок за первый заказ!" text="Лёгкое говяжье — пластины" pic={banner_pic_1} />
            {goods.filter((el, i) => i >= 0 && i < 4).map(el => <Card {...el} key={el._id}
                img={el.pictures}
                setServerGoods={setServerGoods} />)}

            <PromoFlex header="Наборы для дрессировки" text="от 840 ₽" pic={banner_pic_6} />
            <PromoFlex header="Микс масел" text="пищевая здоровая натуральная добавка" pic={banner_pic_3} />

            {goods.filter((el, i) => i >= 4 && i < 8).map(el => <Card {...el} key={el._id} img={el.pictures} setServerGoods={setServerGoods} />)}

            <PromoFlex header="Рога северного оленя" text="от 10 до 30 кг" pic={banner_pic_2} />
            <PromoFlex header="Слипы из шеи индейки" text="100 % натуральное" pic={banner_pic_4} />

            {goods.filter((el, i) => i >= 8 && i < 12).map(el => <Card {...el} key={el._id} img={el.pictures} setServerGoods={setServerGoods} />)}

            <PromoFlex type="lg" header="Подарок за десятый заказ!" text="Лёгкое говяжье — кубики" pic={banner_pic_5} />
        </>}
        {!user && <>
            <h1>Требуется авторизация</h1>
            <span className="profile__greetings">Функционал сайта ограничем. Чтобы получить доступ к полному функционалу сайта, войдите в аккаунт или зарегистрируйтесь!</span>

            <Link to="" title="Войти" className="profile__log" onClick={logIn}><img src={login_ico} className="profile__log" alt="Войти" />Войти</Link>
            <PromoFlex type="lg" header="Подарок за первый заказ!" text="Лёгкое говяжье — пластины" pic={banner_pic_1} />

            <PromoFlex header="Наборы для дрессировки" text="от 840 ₽" pic={banner_pic_6} />
            <PromoFlex header="Микс масел" text="пищевая здоровая натуральная добавка" pic={banner_pic_3} />
            <PromoFlex header="Рога северного оленя" text="от 10 до 30 кг" pic={banner_pic_2} />
            <PromoFlex header="Слипы из шеи индейки" text="100 % натуральное" pic={banner_pic_4} />
            <PromoFlex type="lg" header="Подарок за десятый заказ!" text="Лёгкое говяжье — кубики" pic={banner_pic_5} />
        </>}

    </>
    )
}

export default Main;