import React from "react";

class ProfileClass extends React.Component {

     render() {
          return (
              <div className="profile">
                  <p>
                      Привет <b>{this.props.name.split(" ")[0]}!</b>
                      <br/>
                      Дата регистрации: {this.props.registredAt}
                  </p>
              </div>
          )
     }
}

export default ProfileClass;
