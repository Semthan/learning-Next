import React from 'react'
import ReactFullpage from "@fullpage/react-fullpage";
import Menu from '../components/Menu'

export default function fullpageFunction() {
    const fullpages = [
        {
            text: "Section 1",
        },
        {
            text: "Section 2"
        },
        {
            text: 'Semthan',
        }
    ]

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
    )
}
