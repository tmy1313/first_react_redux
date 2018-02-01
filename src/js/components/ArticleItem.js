import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import deleteArticle from '../actions/DeleteArticle';

class ArticleItem extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteArticle(this.props.article);
  }

  render() {
    return (
        <li className="list-group-item" key={this.props.article.id}>
            {this.props.article.title} &nbsp;
            <a href="#" onClick={this.handleDelete} key={this.props.article.id}>X</a>
        </li>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteArticle: deleteArticle
    }, dispatch);
}


ArticleItem.propTypes = {
  article: PropTypes.object.isRequired,
  deleteArticle: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(ArticleItem);
