import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ArticleItem from "./ArticleItem";
import { bindActionCreators } from "redux";
import addArticle from '../actions/AddArticle';

class ArticleList extends Component {
  constructor() {
    super();
  }

  render() {
    const {articles} = this.props;
    console.log("Rendering Article List");
    //console.log(this.props);
    console.log(articles);
    const articleItems =  articles.map((article) => {
      console.log(article);
      return (
        <ArticleItem article={article} key={article.id} />
      )
    })
    
    return (
      <ul className="list-group list-group-flush">
        {articleItems}
      </ul>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addArticle: addArticle
  }, dispatch);
}

const mapStateToProps = state => {
  console.log("ArticleList mapStateToProps: " + JSON.stringify(state.articles.articles));
  console.log("ArticleList mapStateToProps type of state.articles: " + typeof state.articles.articles);
  return {
    articles: state.articles.articles
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
