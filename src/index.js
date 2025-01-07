import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"
import App from './components/App.js'
import "./index.css"
import { Provider } from "react-redux";
import store from "./redux/configureStore.js";

import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("app");
createRoot(rootElement).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

);
