import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
    /*
    * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
    */
};


const originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionsColor: [...originalColors],
            fullpages: [
                {
                    text: "Section 1"
                },
                {
                    text: "Section 2"
                },
                {
                    text: 'Section 3',
                }
            ]
        };
    }

    /* 
        export defualt function fullpage(props){
            return(
                const 
            )
        }
    */

    render() {
        const { fullpages } = this.state;

        if (!fullpages.length) {
            return null;
        }

        const Menu = () => (
            <div
                className="menu"
                style={{
                    position: "fixed",
                    top: 0,
                    zIndex: 100
                }}
            >
            </div>
        );

        return (

            <div className="App">
                <Menu />
                <ReactFullpage
                    navigation
                    pluginWrapper={pluginWrapper}
                    sectionsColor={this.state.sectionsColor}
                    render={comp =>
                        console.log("render prop change") || (
                            <ReactFullpage.Wrapper>
                                {fullpages.map(({ text }) => (
                                    <div key={text} className="section">
                                        <h1>{text}</h1>
                                    </div>
                                ))}
                            </ReactFullpage.Wrapper>
                        )
                    }
                />
            </div>
        );
    }
}

export default App;