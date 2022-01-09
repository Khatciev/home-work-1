import React from "react";
import {montoToStr} from "../../utils";

class ProfileClass extends React.Component {

     render() {
          return (
              <div className="profile">
                  <p>
                      Привет <b>{this.props.name}!</b>
                      <br/>
                      Дата регистрации: {this.props.registredAt.getDate()} {montoToStr(this.props.registredAt.getMonth())} {this.props.registredAt.getFullYear()}
                  </p>
              </div>
          )
     }
}

export default ProfileClass;
