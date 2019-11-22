import React from 'react';
import "./Switch.scss"

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
                        <button className="switch-section__button" onClick={() => this.toggleOne()}>CRM</button>
                        <button className="switch-section__button" onClick={() => this.toggleTwo()}>Data Analysis</button>
                        <button className="switch-section__button" onClick={() => this.toggleThree()}>Smartphone/Tablet</button>
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
                                    src="https://public.tableau.com/views/Book2_15744511876460/ICT_CRM?:showVizHome=n&amp;:embed=true&amp;:display_count=yes"
                                    //src="https://public.tableau.com/views/BrainStationKickstarterNumbers/ofProjectsDetail?:showVizHome=n&amp;:embed=true&amp;:display_count=yes"
                                    width="1290" height="600">
                                </iframe>
                                <p>This is a caption for the chart</p>
                            </div> : null
                    } {
                        (this.state.displayTwo === true) ? <iframe
                            src="https://public.tableau.com/views/Book2_15744511876460/ICT_data_Analytics?:showVizHome=n&amp;:embed=true&amp;:display_count=yes"
                            //src="https://public.tableau.com/views/BrainStationKickstarterNumbers/1?:showVizHome=n&amp;:embed=true&amp;:display_count=yes"
                            width="1290" height="600">
                        </iframe> : null
                    } {
                        (this.state.displayThree === true) ? <iframe
                            src="https://public.tableau.com/shared/3YZZQNQTR?:showVizHome=n&amp;:embed=true&amp;:display_count=yes"
                            //src="https://public.tableau.com/views/Book2_15744511876460/ICT_data_Analytics?:showVizHome=n&amp;:embed=true&amp;:display_count=yes"
                            //src="https://public.tableau.com/views/BrainStationKickstarterNumbers/1?:showVizHome=n&amp;:embed=true&amp;:display_count=yes"
                            width="1290" height="600">
                        </iframe> : null
                    }
                </div>
            </section>
        );
    }
}
export default Switch;