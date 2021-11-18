import React, { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Menu from '../components/Menu'

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {

};


const originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];


/* export default function Home(props) {

    const pluginWrapper = () => {

    };

    const [sectionColor, setSectionColor] = useState([
        '#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'
    ])

    const [fullp, setFullp] = useState(
        {
            text: "Section 1"
        },
        {
            text: "Section 2"
        },
        {
            text: 'Section 3',
        }

    )

    const { fullpages } = setFullp();


    return (
        <div className="App">
            <Menu />
            <ReactFullpage
                navigation
                pluginWrapper={pluginWrapper}
                render={

                    <ReactFullpage.Wrapper>
                        {fullpages.map(({ text }) => (
                            <div key={text} className="section">
                                <h1>{text}</h1>
                            </div>
                        ))}
                    </ReactFullpage.Wrapper>

                }
            />
        </div>
    )
}
 */

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            fullpages: [
                {
                    text: "Section 1",
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

    render() {
        const { fullpages } = this.state;

        if (!fullpages.length) {
            return null;
        }

        return (

            <div className="App">
                <Menu />
                <ReactFullpage
                    navigation
                    //pluginWrapper={pluginWrapper}
                    // sectionsColor={this.state.sectionsColor}
                    render={comp =>
                        <ReactFullpage.Wrapper>
                            {fullpages.map(({ text }) => (
                                <div key={text} className="section">
                                    <h1>{text}</h1>
                                </div>
                            ))}
                        </ReactFullpage.Wrapper>
                    }
                />
            </div>
        );
    }
}

export default App;