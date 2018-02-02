import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import deleteArticle from '../actions/DeleteArticle';
import updateArticle from '../actions/UpdateArticle';

class ArticleItem extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      editMode: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditMode = this.handleEditMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.focus();
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleUpdate(event) {
    event.preventDefault();
    this.setState({editMode: false});
    this.props.updateArticle({
      title: this.state.title,
      id: this.props.article.id
    });
  }

  handleEditMode(event) {
    event.preventDefault();
    this.setState({
      title: this.props.article.title,
      editMode: true});
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.editMode) {
      this.focusTextInput();
    }
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteArticle(this.props.article);
  }

  renderComponentEditable() {
    return (
      <li className="list-group-item" key={this.props.article.id}>
        <div className="input-group">
          <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Title" 
              ref={(input) => { this.textInput = input }} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={this.handleUpdate}>Update</button>
          </div>
        </div>
      </li>
    )
  }

  renderComponentReadOnly() {
    return (
      <li className="list-group-item" key={this.props.article.id}>
            {this.props.article.title} 
            &nbsp;
            <a href="#" onClick={this.handleDelete} ><span className="fas fa-times"></span></a>
            &nbsp;
            <a href="#" onClick={this.handleEditMode} ><span className="fas fa-pencil-alt"></span></a>
        </li>
    )
  }

  render() {
    if (this.state.editMode) {
      return this.renderComponentEditable();
    }
    else {
      return this.renderComponentReadOnly();
    }
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteArticle: deleteArticle,
        updateArticle: updateArticle
    }, dispatch);
}


ArticleItem.propTypes = {
  article: PropTypes.object.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  updateArticle: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(ArticleItem);
