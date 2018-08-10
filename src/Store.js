import React, { Component } from "react";


class Store extends Component {
    render() {
        var storeStyle = {
            padding: 10,
            margin: 10,
            backgroundColor: this.props.bgColor,
            color: "#333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: "32px",
            textAlign: "center"
        };
        return (
            // elements go here...
            <div style={storeStyle}>
            {this.props.children}
            <h1>This is a store</h1>
            </div>
            //, destination
        );
    }
}

export default Store;