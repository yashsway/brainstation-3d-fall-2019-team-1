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

            <section className="contentsection zero">
                <span className="chart-title"> Who Are We?</span>
                <span className="blurb">Digital Futures is the future of retail. Learn about the benefits of digital adoption in a constantly evolving and changing retail landscape. Visualise your company’s digital future.</span>
            </section>

            <section className="contentsection one">
                <span className="chart-title"> Types of ICT</span>
                {/* <div className="button-container">
                <button className="chart-button">Benefits</button>
                <button className="chart-button">Barriers</button>
                <button className="chart-button">Chart 3</button>
                </div> */}
                <Switch />
            </section>

            <section className="contentsection two">
                <div className="image-container">
                <img src={girlImage} className="girlImage" ></img>
                </div>

                <div className="sectiontwo-container">
                 <h1 className="ict-title">What is ICT?</h1>  
                 <p className="paragraph secondsection" >Any and all devices, networking components, applications and systems that combined allow people and organizations to interact with the digital world. In E-Commerce, ICT can help make better use of production and resources, improve profitability, cost reduction over manual tasks and reduce lead times.</p> 
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
