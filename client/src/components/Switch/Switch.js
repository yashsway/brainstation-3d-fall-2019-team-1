import React from 'react';
import './Switch.scss';
import SampleBarChart from '../SampleBarChart/SampleBarChart';

class Switch extends React.Component {
    state = {
        displayOne: true,
        displayTwo: false,
        displayThree: false,
    }

    toggleOne() {
        this.setState({
            displayOne: true,
            displayTwo: false,
            displayThree: false,
        })
    }

    toggleTwo() {
        this.setState({
            displayOne: false,
            displayTwo: true,
            displayThree: false,
        })
    }

    toggleThree() {
        this.setState({
            displayOne: false,
            displayTwo: false,
            displayThree: true,
        })
    }

    render() {
        return (
            <section className="switch-section">
                <div className="switch-section__container">



                    <div className="switch-section__button-container">
                        <button className="switch-section__button" onClick={() => this.toggleOne()}>Chart 1</button>
                        <button className="switch-section__button" onClick={() => this.toggleTwo()}>Chart 2</button>
                        <button className="switch-section__button" onClick={() => this.toggleThree()}>Chart 3</button>
                    </div>

                    {/* <iframe
                        src="https://public.tableau.com/views/BrainStationKickstarterNumbers/1?:showVizHome=n&amp;:embed=true&amp;:display_count=yes"
                        width="645" height="955">
                    </iframe> */}

                    {/* <iframe
                        src="https://public.tableau.com/views/BrainStationKickstarterNumbers/ofProjectsDetail?:showVizHome=n&amp;:embed=true&amp;:display_count=yes"
                        width="645" height="300">
                    </iframe> */}

                    {
                        (this.state.displayOne === true) ?
                            <div className="chart-caption">
                                <iframe
                                    src="https://public.tableau.com/views/BrainStationKickstarterNumbers/ofProjectsDetail?:showVizHome=n&amp;:embed=true&amp;:display_count=yes"
                                    width="645" height="300">
                                </iframe>
                                <p>This is a caption for the chart</p>
                            </div> : null
                    } {
                        (this.state.displayTwo === true) ? <iframe
                            src="https://public.tableau.com/views/BrainStationKickstarterNumbers/1?:showVizHome=n&amp;:embed=true&amp;:display_count=yes"
                            width="645" height="300">
                        </iframe> : null
                    } {
                        (this.state.displayThree === true) ? <SampleBarChart /> : null
                    }
                </div>
            </section>
        );
    }
}

export default Switch;