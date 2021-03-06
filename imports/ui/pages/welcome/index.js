import React, { Component } from "react";
import LoginForm from "../../components/welcome/Login";
import { UsersInfoContext } from "../../components/context/UsersInfoProvider";

class HomePage extends Component {
  render() {
    return (
      <UsersInfoContext.Consumer>
        {({ allUserInfo, loading }) => (
          <LoginForm allUserInfo={allUserInfo} loading={loading} />
        )}
      </UsersInfoContext.Consumer>
    );
  }
}

export default HomePage;
