import reportWebVitals from "./reportWebVitals";
import state from "./redux/state";
import {rerenderEntireTree} from "./render.js"
rerenderEntireTree(state);


reportWebVitals();
