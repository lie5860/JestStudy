import React, { Component } from "react";
import PropTypes from "prop-types";
import ThemeSwitch from "./ThemeSwitch"
class Content extends Component {
  render() {
    return (
        <div>
            <h1>内容</h1>
            <ThemeSwitch></ThemeSwitch>
        </div>
    )
  }
}
export default Content;
