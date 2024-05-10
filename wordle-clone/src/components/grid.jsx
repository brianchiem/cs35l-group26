import React from "react";
import Row from './row.jsx'
import './styles/grid.css'

function Grid() {
    return (
        <div className="grid">
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    )
}

export default Grid