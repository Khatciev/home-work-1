import React from 'react';
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";

const App = () => {
    return (
        <>
       <Profile  name="Вася Пупкин" registredAt={new Date(2021, 5, 22)}/>
       <ProfileClass name="Вася Пупкин" registredAt={new Date(2021, 5, 22)}/>
        </>
    );
};

export default App;