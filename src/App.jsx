import { useState } from 'react'
import './styles/app.css';
import TextEditor from './components/textEditor.jsx';
import AlertButton from './components/alertButton.jsx';

function App() {
  const [ textToLabel, setTextToLabel ] = useState({ text: "", colorHex: "#FF0000", colorName: "Vermelho" });
  const [ isLabelCreated, setIsLabelCreated ] = useState(false)

  function handleTextToLabel(newLabelData) {
      setTextToLabel((currentState) => ({
        ...currentState,
        ...newLabelData
      }));
  };

  function handleIsLabelCreated(boolean) {
    setIsLabelCreated(boolean);
  }

  return (
    <div id="main">
      <h1>ESTILIZADOR DE LABEL</h1>
      <TextEditor onText={handleTextToLabel} isLabelCreated={isLabelCreated} onCreation={handleIsLabelCreated}/>
      <AlertButton newLabel={textToLabel} onCreation={handleIsLabelCreated}/>
    </div>
  )
}

export default App;
