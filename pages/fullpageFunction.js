import React from 'react'
import ReactFullpage from "@fullpage/react-fullpage";
import Menu from '../components/Menu'
import Section from '../components/Section';
import Section2 from '../components/SectionTwo';

export default function fullpageFunction() {
    const fullpages = [
        {
            id: "Semthan",
        },
        {
            id: "Section 1"
        },
        {
            id: 'Section 2',
        }
    ]

    const pages = new Array(4)

    if (!fullpages.length) {
        return null;
    }

    return (
        <div className="App">
            <Menu />
            <ReactFullpage
                navigation
                anchors
                //pluginWrapper={pluginWrapper}
                // sectionsColor={this.state.sectionsColor}
                render={comp =>
                    <ReactFullpage.Wrapper>
                        {fullpages.map(() => (
                            <div className="section">
                                <Section></Section>
                                <Section2></Section2>
                            </div>
                        ))}
                    </ReactFullpage.Wrapper>
                }
            />
        </div>
    )
}
