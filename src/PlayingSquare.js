import React, { Component } from 'react';


export default class PlayingSquare extends Component {
    render() {
  
      let number = this.props.number;
      let fadeIn = this.props.board[number] === 1 || this.props.board[number] === 2 ? "fade-in" : "";
      let winRow = this.props.number === this.props.winRow ? "rowline" : "";
      let winCol = this.props.number === this.props.winCol ? "colline" : "";
      //Number 4 is the center square, where the diag line will be drawn
      let winDiag;

      if (this.props.number === 4 && this.props.winDiag === "backline") {
          winDiag = "backDiagLine";
      } else if (this.props.number === 4 && this.props.winDiag === "fwd") {
          winDiag = "fwdDiagLine";
      }

      let classNames = ["grid-item", winRow, winCol, winDiag];
      
      
      return (
        <div className={classNames.join(" ")} onClick={() => this.props.onClick(number)}>
          <span className={fadeIn}>
          {this.props.board[number] === 1 ? "X" : ""}
          {this.props.board[number] === 2 ? "O" : ""}
          </span>
        </div>
      );
    }
  }