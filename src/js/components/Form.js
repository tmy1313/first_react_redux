import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import uuidv1 from "uuid";
import { bindActionCreators } from "redux";
import addArticle from '../actions/AddArticle';

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleSubmit(event) {
    console.log("Submitting form.");
    event.preventDefault();
    
    const id = uuidv1();
    let article = {};
    article.title = this.state.title;
    article.id = id;
    console.log(article);
    console.log(this.props);
    this.props.addArticle(article);
    
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
            placeholder="Title"
          />
        </div>
        <button type="submit" className="btn btn-success ">
          SAVE
        </button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addArticle: addArticle
  }, dispatch);
}

ConnectedForm.propTypes = {
  addArticle: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(ConnectedForm);;
