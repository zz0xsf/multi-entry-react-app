import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "../serviceWorker";
import H5Demo from "./container/h5Demo";
import configureStore from "./store";
const store = configureStore();

class Pc extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/h5/demo" component={H5Demo} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<Pc />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
