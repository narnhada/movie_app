import React from "react";
import { withRouter } from "react-router-dom";

function Detail({ location, history }) {
  if (location.state === undefined) {
    history.push("/");
  }
  if (location.state) {
    return (
      <div className="detail__container">
        <span>{location.state.title}</span>
        <br />
        <span>{location.state.summary}</span>
      </div>
    );
  } else {
    return null;
  }
}

export default withRouter(Detail);
