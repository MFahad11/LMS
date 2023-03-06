import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.js"
import "./Pages/index.css"
import { Provider } from "react-redux"
import store from "./middleware/redux/store.js"

// import store from "./middleware/redux/store.js"


const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(
<BrowserRouter>
<Provider store={store}>

<App/>
</Provider>
</BrowserRouter>
)