import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import TodoContainer from './components/TodoContainer';
import "./App.css"
ReactDom.render(
  <React.StrictMode>
    <Router>
    <TodoContainer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
