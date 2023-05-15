import "./style.css";
import { useState } from "react";


const SearchHeader = ({ arr, upd, user }) => {
    const [text, setText] = useState("");
    const searchByText = (e) => {
        let val = e.target.value;
        setText(val);
        let result = arr.filter(el => new RegExp(val, "i").test(el.name));
        upd(result);
        console.log(result);
    }
    return (<>
        {user && <>
            <div className="search-header">
                <input type="search" placeholder="Поиск" value={text} onChange={searchByText} />
            </div>
        </>}
    </>)
}

export default SearchHeader;