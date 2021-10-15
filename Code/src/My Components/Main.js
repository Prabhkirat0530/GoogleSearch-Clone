import React, { useState } from 'react'
import Google from '../Media/Google.png';
import searchicon from '../Media/searchicon.svg';
import './Main.css';

export const Main = () => {

    const [value, setValue] = useState("");

    const input_getter = (e) => {
        setValue(e.target.value);
        console.log(value);
    }

    const click_event = (e) => {
        if (e.keyCode == 13) {
            let url = 'http://www.google.com/search?q=' + value;
            setValue("");
            window.open(url, "_self");
        }
    }

    return (
        <div className="logo-container">

            {/* Image */}
            <img className="logo" src={Google} alt="Google" />
            <br />

            {/* Search Box */}
            <div className="Search">
                <img className="icon" src={searchicon} />
                <input className="SearchBox" onChange={input_getter} onKeyUp={click_event} type="text" />
            </div>

            {/* Buttons */}
            <a className="btn-link" href="https://www.google.com"><button className="btn">Google Search</button></a>
            <a className="btn-link" href="https://www.google.com/doodles"><button className="btn">I'm Feeling Lucky</button></a>

            {/* Languages */}
            <p className="language"> offered in: &nbsp; &nbsp;
                <a className="language" href="https://www.google.com/setprefs?sig=0_uDPHbTGkclY_jAi2hcPAO133l0k%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiKrMvugazzAhWfIbkGHQYcDNsQ2ZgBCA4">हिन्दी</a>&nbsp; &nbsp;
                <a className="language" href="https://www.google.com/setprefs?sig=0_uDPHbTGkclY_jAi2hcPAO133l0k%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiKrMvugazzAhWfIbkGHQYcDNsQ2ZgBCA8">বাংলা</a>&nbsp; &nbsp;
                <a className="language" href="https://www.google.com/setprefs?sig=0_uDPHbTGkclY_jAi2hcPAO133l0k%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiKrMvugazzAhWfIbkGHQYcDNsQ2ZgBCBA">తెలుగు</a>&nbsp; &nbsp;
                <a className="language" href="https://www.google.com/setprefs?sig=0_uDPHbTGkclY_jAi2hcPAO133l0k%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiKrMvugazzAhWfIbkGHQYcDNsQ2ZgBCBE">मराठी</a>&nbsp; &nbsp;
                <a className="language" href="https://www.google.com/setprefs?sig=0_uDPHbTGkclY_jAi2hcPAO133l0k%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiKrMvugazzAhWfIbkGHQYcDNsQ2ZgBCBI">தமிழ்</a>&nbsp; &nbsp;
                <a className="language" href="https://www.google.com/setprefs?sig=0_uDPHbTGkclY_jAi2hcPAO133l0k%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiKrMvugazzAhWfIbkGHQYcDNsQ2ZgBCBM">ગુજરાતી</a>&nbsp; &nbsp;
                <a className="language" href="https://www.google.com/setprefs?sig=0_uDPHbTGkclY_jAi2hcPAO133l0k%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiKrMvugazzAhWfIbkGHQYcDNsQ2ZgBCBQ">ಕನ್ನಡ</a>&nbsp; &nbsp;
                <a className="language" href="https://www.google.com/setprefs?sig=0_uDPHbTGkclY_jAi2hcPAO133l0k%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiKrMvugazzAhWfIbkGHQYcDNsQ2ZgBCBU">മലയാളം</a>&nbsp; &nbsp;
                <a className="language" href="https://www.google.com/setprefs?sig=0_uDPHbTGkclY_jAi2hcPAO133l0k%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiKrMvugazzAhWfIbkGHQYcDNsQ2ZgBCBY">ਪੰਜਾਬੀ</a>
            </p>

        </div >


    )
}
