import * as React from "react"
import { render } from 'react-dom'


import Home from './pages/home'
import About from './pages/about'


const rootEl = document.querySelector("#root");

render(<Home />, rootEl);