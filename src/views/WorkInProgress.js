import React from "react";
import '../styles/WorkInProgress.css';
import workInProgressImg from "../images/work-in-progress.png";

export default function WorkInProgress(){
    return (
        <div className="work-in-progress-view">
            <h1>WORK IN PROGRESS</h1>
            <img src={workInProgressImg} alt="Work in progress"/>
            <p>
                Oops! Parece que essa tela está em desenvolvimento.
            </p>
        </div>
    )
}