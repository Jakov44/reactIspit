import React, { Component } from "react";
import Search from "./components/Search";
import User from "./components/User";
import { connect } from "react-redux";
import {
  setInput,
  getUser,
  getRepos,
  showList,
  resetUser,
  resetRepos,
} from "./redux/actions";
import PropTypes from "prop-types";
import "./style/style.css";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        {!this.props.user ? (
          <Search
            input={this.props.input}
            setInput={this.props.setInput}
            getUser={this.props.getUser}
            getRepos={this.props.getRepos}
            showList={this.props.showList}
          />
        ) : (
          <User
            user={this.props.user}
            repos={this.props.repos}
            showList={this.props.showList}
            resetUser={this.props.resetUser}
            resetRepos={this.props.resetRepos}
            setInput={this.props.setInput}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    input: state.input,
    user: state.user,
    repos: state.repos,
    list: state.list,
  };
}

const mapDispatchToProps = {
  setInput,
  getUser,
  getRepos,
  showList,
  resetUser,
  resetRepos,
};

App.propTypes = {
  input: PropTypes.string,
  user: PropTypes.object,
  repos: PropTypes.array,
  list: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
