import React, { useEffect } from "react";
import Square from "./Square";
import { Button } from "react-bootstrap";

function Board() {
  function renderSquare(i) {
    return (
      // <Button onClick={()=>{console.log(i)}}>
      <Square position={i}/>
      // </Button>
    );
  }

  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div className="col">{renderSquare(1)}</div>
        <div className="col">{renderSquare(2)}</div>
        <div className="col">{renderSquare(4)}</div>
        <div className="col">{renderSquare(5)}</div>
        <div className="col">{renderSquare(6)}</div>
        <div className="col">{renderSquare(7)}</div>
        <div className="col">{renderSquare(8)}</div>
        <div className="col">{renderSquare(9)}</div>
        <div className="col">{renderSquare(10)}</div>
      </div>
      <div className="row">
        <div className="col">{renderSquare(11)}</div>
        <div className="col">{renderSquare(12)}</div>
        <div className="col">{renderSquare(14)}</div>
        <div className="col">{renderSquare(15)}</div>
        <div className="col">{renderSquare(16)}</div>
        <div className="col">{renderSquare(17)}</div>
        <div className="col">{renderSquare(18)}</div>
        <div className="col">{renderSquare(19)}</div>
        <div className="col">{renderSquare(20)}</div>
      </div>
      <div className="row">
        <div className="col">{renderSquare(21)}</div>
        <div className="col">{renderSquare(22)}</div>
        <div className="col">{renderSquare(24)}</div>
        <div className="col">{renderSquare(25)}</div>
        <div className="col">{renderSquare(26)}</div>
        <div className="col">{renderSquare(27)}</div>
        <div className="col">{renderSquare(28)}</div>
        <div className="col">{renderSquare(29)}</div>
        <div className="col">{renderSquare(30)}</div>
      </div>
      <div className="row">
        <div className="col">{renderSquare(31)}</div>
        <div className="col">{renderSquare(32)}</div>
        <div className="col">{renderSquare(34)}</div>
        <div className="col">{renderSquare(35)}</div>
        <div className="col">{renderSquare(36)}</div>
        <div className="col">{renderSquare(37)}</div>
        <div className="col">{renderSquare(38)}</div>
        <div className="col">{renderSquare(39)}</div>
        <div className="col">{renderSquare(40)}</div>
      </div>
      <div className="row">
        <div className="col">{renderSquare(41)}</div>
        <div className="col">{renderSquare(42)}</div>
        <div className="col">{renderSquare(44)}</div>
        <div className="col">{renderSquare(45)}</div>
        <div className="col">{renderSquare(46)}</div>
        <div className="col">{renderSquare(47)}</div>
        <div className="col">{renderSquare(48)}</div>
        <div className="col">{renderSquare(49)}</div>
        <div className="col">{renderSquare(50)}</div>
      </div>
      <div className="row">
        <div className="col">{renderSquare(51)}</div>
        <div className="col">{renderSquare(52)}</div>
        <div className="col">{renderSquare(54)}</div>
        <div className="col">{renderSquare(55)}</div>
        <div className="col">{renderSquare(56)}</div>
        <div className="col">{renderSquare(57)}</div>
        <div className="col">{renderSquare(58)}</div>
        <div className="col">{renderSquare(59)}</div>
        <div className="col">{renderSquare(60)}</div>
      </div>
      <div className="row">
        <div className="col">{renderSquare(61)}</div>
        <div className="col">{renderSquare(62)}</div>
        <div className="col">{renderSquare(64)}</div>
        <div className="col">{renderSquare(65)}</div>
        <div className="col">{renderSquare(66)}</div>
        <div className="col">{renderSquare(67)}</div>
        <div className="col">{renderSquare(68)}</div>
        <div className="col">{renderSquare(69)}</div>
        <div className="col">{renderSquare(70)}</div>
      </div>
      <div className="row">
        <div className="col">{renderSquare(71)}</div>
        <div className="col">{renderSquare(72)}</div>
        <div className="col">{renderSquare(74)}</div>
        <div className="col">{renderSquare(75)}</div>
        <div className="col">{renderSquare(76)}</div>
        <div className="col">{renderSquare(77)}</div>
        <div className="col">{renderSquare(78)}</div>
        <div className="col">{renderSquare(79)}</div>
        <div className="col">{renderSquare(80)}</div>
      </div>
      <div className="row">
        <div className="col">{renderSquare(81)}</div>
        <div className="col">{renderSquare(82)}</div>
        <div className="col">{renderSquare(84)}</div>
        <div className="col">{renderSquare(85)}</div>
        <div className="col">{renderSquare(86)}</div>
        <div className="col">{renderSquare(87)}</div>
        <div className="col">{renderSquare(88)}</div>
        <div className="col">{renderSquare(89)}</div>
        <div className="col">{renderSquare(90)}</div>
      </div>
      <div className="row">
        <div className="col">{renderSquare(91)}</div>
        <div className="col">{renderSquare(92)}</div>
        <div className="col">{renderSquare(94)}</div>
        <div className="col">{renderSquare(95)}</div>
        <div className="col">{renderSquare(96)}</div>
        <div className="col">{renderSquare(97)}</div>
        <div className="col">{renderSquare(98)}</div>
        <div className="col">{renderSquare(99)}</div>
        <div className="col">{renderSquare(100)}</div>
      </div>
    </div>
  );
}

export default Board;
