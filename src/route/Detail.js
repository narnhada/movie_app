import React from "react";
import "./Detail.css";


class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/"); // movie-detail를 직접 입력하면 state값이 undefined이어서 '/'로 리다이렉트
    }
  }

  render() {
    const { location } = this.props;
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
}
export default Detail;
