import React, { Component } from 'react';


export default class PlayingSquare extends Component {
    render() {
  
      let number = this.props.number;
      let fadeIn = this.props.board[number] === 1 || this.props.board[number] === 2 ? "fade-in" : "";
      
      return (
        <div className={this.props.className} onClick={() => this.props.onClick(number)}>
          <span className={fadeIn}>
          {this.props.board[number] === 1 ? "X" : ""}
          {this.props.board[number] === 2 ? "O" : ""}
          </span>
        </div>
      );
    }
  }