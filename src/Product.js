import React, { Component } from "react";


class Product extends Component {
    render() {
        var productStyle = {
            // style..
        };
        return (
            // structure
            <div style={productStyle}>
            {this.props.children}

            </div>
            //, destination
        )
    }
}