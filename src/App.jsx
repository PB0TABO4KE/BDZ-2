import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";


// Компоненты
import { Header, Footer, MobileMenu } from "./components/General";
import Search from "./components/Search";
import Modal from "./components/Modal";

//Страницы
import Draft from "./pages/Draft";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites"
import Loader from "./components/Loader";

const App = () => {

    const [token, setToken] = useState(localStorage.getItem("rockToken"));
    const [user, setUser] = useState(localStorage.getItem("rockUser"));
    const [userId, setUserId] = useState(localStorage.getItem("rockId"));
    const [modalActive, setModalActive] = useState(false);
    const [serverGoods, setServerGoods] = useState([]);
    const [goods, setGoods] = useState([]);

    useEffect(() => {
        if (token) {
            fetch("https://api.react-learning.ru/products?page=1&limit=100", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setServerGoods(data.products.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
                })
        }
    }, [token])

    useEffect(() => {
        if (!goods.length) {
            setGoods(serverGoods);
        }
    }, [serverGoods]);


    useEffect(() => {
        console.log("User was changed")
        if (user) {
            setToken(localStorage.getItem("rockToken"));
            setUserId(localStorage.getItem("rockId"));
        }
        else {
            setToken("");
            setUserId("");
        }
        console.log("U ", user);
        console.log("t ", token);
    }, [user])

    return (
        <React.Fragment>
            <Header user={user} setModalActive={setModalActive} setGoods={setGoods} serverGoods={serverGoods} />
            <MobileMenu user={user} setModalActive={setModalActive} />
            <main>
                <Routes>

                {!user && <>
                <Route path="/*" element={<Main goods={goods} setModalActive={setModalActive} setServerGoods={setServerGoods} user={user} />} />
                
                </>}

                    {user && <>
                    <Route path="/" element={<Main goods={goods} setServerGoods={setServerGoods} user={user} />} />

                    <Route path="/catalog" element={<Catalog goods={goods} setServerGoods={setServerGoods} serverGoods={serverGoods} />} />

                    <Route path="/draft" element={<Draft />} />

                    <Route path="/profile" element={<Profile user={user} setUser={setUser} color="yellow" />} />

                    <Route path="/product/:id" element={<Product token={token} />} />

                    <Route path="/favorites" element={<Favorites goods={goods} userId={userId} setServerGoods={setServerGoods} />} />
                    </>}

                </Routes>



            </main>
            <Footer />
            <Modal active={modalActive} setActive={setModalActive} setUser={setUser} />
        </React.Fragment>
    )
}

export default App;