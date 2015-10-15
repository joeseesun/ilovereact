const React = require('react');
let App = require("./components/App.js");

window.onload = ()=> {
	React.render(<App />, document.querySelector('#root'));
}