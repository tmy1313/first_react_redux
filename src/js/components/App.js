import React from "react";
import ArticleList from "./ArticleList";
import Form from "./Form";
import Employees from "./Employees";
import Employees1 from "./Employees1";

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
        <Employees1 />
      </div>
    </div>
  </div>
);

export default App;
