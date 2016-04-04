/** @jsx React.DOM */
'use strict'
var React = require('react')

module.exports = React.createClass({
    displayName: 'HelloReact',
    // Returns a tree of React components that will eventually render to HTML
    render: function(){
        return <div>Hello React</div>
    }
})