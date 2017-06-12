var React = require('react');
var {IndexLink, Link} = require('react-router');

var Nav = () => {
  return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Time App</li>
            <li><IndexLink to="/" activeClassName="active-link timer">Timer</IndexLink></li>
            <li><Link to="/Countdown" activeClassName="active-link count">Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created By <a href="https://github.com/escrew7" target="_blank">Luke Rees</a>
            </li>
          </ul>
        </div>
      </div>
  )
}

module.exports = Nav;
