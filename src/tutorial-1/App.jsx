import React from 'react';
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import {dateFormat} from "../utils";

const App = () => {
    return (
        <>
       <Profile  name="Вася Пупкин" registredAt={dateFormat(new Date(2021, 5, 22))}/>
       <ProfileClass name="Вася Пупкин" registredAt={ dateFormat(new Date(2021, 5, 22))}/>
        </>
    );
};

export default App;