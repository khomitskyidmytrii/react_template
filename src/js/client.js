import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Header from "./components/layout/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Header}></IndexRoute>
            <Route path="contact" component={Contact}></Route>
            <Route path="about" component={About}></Route>
            <Route path="portfolio" component={Portfolio}></Route>
            <Route path="page-top" component={Header}></Route>
        </Route>
    </Router>,
    app);
