import React, { Component } from 'react';
import "./Main.scss";
import girlImage from '../../assets/Image1.svg';

export class Main extends Component {
    render() {
        return (
            <>
            <div  className="header-bg"></div>
            <section className="contentsection one">
                <span className="chart-title"> The Important Infomation</span>
                <div className="button-container">
                <button className="chart-button">Chart 1</button>
                <button className="chart-button">Chart 2</button>
                <button className="chart-button">Chart 3</button>
                </div>

                <div className="chart-container">

                </div>
            </section>

            <section className="contentsection two">
                <h1>test</h1>
                <img src={girlImage} className="girlImage" ></img>
            </section>
            </>
        )
    }
}

export default Main
