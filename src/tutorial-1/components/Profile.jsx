import React from 'react';
import "./style.css"
import {montoToStr} from "../../utils";



const Profile = (props) => {
   const data = props.registredAt

    return (
        <div className="profile">
            <p>
                Привет <b>{props.name}!</b>
                <br/>
                Дата регистрации: {data.getDate()} {montoToStr(data.getMonth())} {data.getFullYear()}
            </p>
        </div>
    );
};

export default Profile;