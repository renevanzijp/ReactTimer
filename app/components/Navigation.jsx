/*
Creating and using new components:
1) Create:
    a) Create component like and expose it.
    b) Add alias to webpack.config.js
2) Use:
    a require: var Navigation = require ("Navigation")
    b) <Navigation/>
 */

var React = require("react");
var {Link, IndexLink} = require("react-router");

var Navigation =  () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        React timer app
                    </li>
                    <li>
                        <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="/Countdown" activeClassName="active-link">Countdown</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="https://github.com/renevanzijp" target="_blank">René van Zijp</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Navigation;