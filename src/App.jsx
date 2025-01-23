import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import {EXAMPLES} from "./data.js";
import {useState} from "react";

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(select) {
        //Select Button => Component , Props, JSX, State
        setSelectedTopic(select);
    }

    let tabContent = <p>Please selected Topic.</p>
    if (selectedTopic) {
        tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
        </div>);

    }
    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {
                             CORE_CONCEPTS.map((concept, index) => {
                                return <CoreConcepts key={index} {...concept}/>
                            })
                        }
                        {/*<CoreConcepts {...CORE_CONCEPTS[0]} />*/}
                        {/*<CoreConcepts {...CORE_CONCEPTS[1]} />*/}
                        {/*<CoreConcepts {...CORE_CONCEPTS[2]} />*/}
                        {/*<CoreConcepts {...CORE_CONCEPTS[3]} />*/}

                    </ul>

                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic === 'components'} handleClick={() => handleClick('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} handleClick={() => handleClick('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} handleClick={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} handleClick={() => handleClick('state')}>State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
