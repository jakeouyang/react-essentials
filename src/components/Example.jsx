import { useState } from 'react';
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from './Section.jsx';

export default function Example() {
  const [selectTopic, setSelectTopic] = useState("");

  function selectHandler(selectButton) {
    setSelectTopic(selectButton);
  }

  return (
    <Section id="examples" title="Examples">
      <menu>
        <TabButton
          isSelected={selectTopic === "components"}
          onClick={() => selectHandler("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectTopic === "jsx"}
          onClick={() => selectHandler("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectTopic === "props"}
          onClick={() => selectHandler("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectTopic === "state"}
          onClick={() => selectHandler("state")}
        >
          State
        </TabButton>
      </menu>
      {!selectTopic && <p>Please select a topic!</p>}
      {selectTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectTopic].title}</h3>
          <p>{EXAMPLES[selectTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
