import React from "react";
import "./Detail.css";

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

export default Detail;
