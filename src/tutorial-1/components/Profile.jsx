import React from 'react';
import "./style.css"


const Profile = (props) => {


    return (
        <div className="profile">
            <p>
                Привет <b>{props.name.split(" ")[0]}!</b>
                <br/>
                Дата регистрации: {props.registredAt}
            </p>
        </div>
    );
};

export default Profile;