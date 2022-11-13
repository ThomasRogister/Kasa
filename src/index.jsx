import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Main/Header";
import Footer from "./components/Main/Footer";

ReactDOM.render(
  <BrowserRouter>
    <div className="template">
      <Header />
      <div className="content">
        <App />
      </div>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
