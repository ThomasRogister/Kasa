import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";


ReactDOM.render(
  <BrowserRouter>
    <div className="index__template">
      <Header />
      <div className="index__content">
        <App />
      </div>
      <div className="index__footer">
        <Footer/>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
