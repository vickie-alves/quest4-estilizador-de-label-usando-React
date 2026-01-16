import { useState } from 'react';
import TextVisuals from './textVisuals.jsx';

function TextEditor({ onText, isLabelCreated, onCreation }) {
  const [ text, setText ] = useState("");
  const [ color, setColor ] = useState("#FF0000");

  return (
    <>
        <label htmlFor="text" className="input-label">Texto</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(event) => {
            const textChange = event.target.value;
            setText(textChange)
            onText({ text: textChange })
          }}
          placeholder="Insira o seu texto aqui..."></input>

        <label htmlFor="color" className="input-label">Cor</label>
        <select
          id="color"
          value={color}
          onChange={(event) => {
            const colorChange = event.target;
            setColor(colorChange.value)
            onText({ colorHex: colorChange.value, colorName: colorChange.selectedOptions[0].innerText })
          }}>
            <option value="#FF0000">Vermelho</option>
            <option value="#FF7F00">Laranja</option>
            <option value="#FFFF00">Amarelo</option>
            <option value="#00FF00">Verde</option>
            <option value="#00FFFF">Ciano</option>
            <option value="#0000FF">Azul</option>
            <option value="#4B0082">Anil</option>
            <option value="#9400D3">Violeta</option>
            <option value="#FF007F">Rosa</option>
            <option value="#FFFFFF">Branco</option>
        </select>
        <TextVisuals textMessage={text} textColor={color} isLabelCreated={isLabelCreated} onCreation={onCreation}/>
    </>
  )
}

export default TextEditor;