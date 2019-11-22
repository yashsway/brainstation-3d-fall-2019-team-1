import React, { Component } from 'react';
import "./Main.scss";
import girlImage from '../../assets/Image1.svg';
import phone from '../../assets/phone.png';
import desktop from '../../assets/desktop.png';
import people from '../../assets/people.png';
import Switch from '../Switch/Switch'

export class Main extends Component {
    render() {
        return (
            <>
            <div  className="header-bg"></div>
            <section className="contentsection one">
                <span className="chart-title"> The Important Infomation</span>
                {/* <div className="button-container">
                <button className="chart-button">Benefits</button>
                <button className="chart-button">Barriers</button>
                <button className="chart-button">Chart 3</button>
                </div> */}
                <Switch />
                <div className="chart-container">

                </div>
            </section>

            <section className="contentsection two">
                <div className="image-container">
                <img src={girlImage} className="girlImage" ></img>
                </div>

                <div className="sectiontwo-container">
                 <h1>test</h1>  
                 <p className="paragraph secondsection" >fnjdlas nbfjkldsabnjlfbdsad fasbdsna jklbnfakl wbfh kdl sa bhkfdsbak fnjdlas nbfjkldsabnjlfbdsad fasbdsna jklbnfakl wbfhkdlsab hkfdsbak fnjdlas nbfjkldsabnjlfbdsad fasbdsna jklbnfakl wbfhkdlsabhkfd sbak</p> 
                </div>
                
                
                
            </section> 

            <section className="contentsection three">
                {/* <div className="percentage-container"> */}

                    <div className="percentage-content-container">
                    <img className="phone-img" src={phone} alt="hi"></img>
                    <span className="percentage">40%</span>
                    </div>

                    <div className="percentage-content-container">
                    <img className="desktop-img" src={desktop} alt="hi"></img>
                    <span className="percentage">40%</span>
                    </div>

                    <div className="percentage-content-container">
                    <img className="people-img" src={people} alt="hi"></img>
                    <span className="percentage">40%</span>
                    </div>

                {/* </div> */}
            </section> 
            </>
        )
    }
}

export default Main
