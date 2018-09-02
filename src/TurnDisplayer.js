import React, { Component } from 'react';

export default class TurnDisplayer extends Component {
    render() {
        let player = this.props.player === 1 ? "X" : "O";

        return (
            <h1 className="center-align" >It's {player}'s turn!</h1>
        );
    }
}