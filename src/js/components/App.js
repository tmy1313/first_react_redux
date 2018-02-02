import React from "react";
import ArticleList from "./ArticleList";
import Form from "./Form";
import Employees from "./Employees";

const App = () => (
  <div>
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Articles</h2>
        <ArticleList />
      </div>
      <div className="col-md-4 offset-md-1">
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-8 offset-md-1">
        <Employees />
      </div>
    </div>
  </div>
);

export default App;
