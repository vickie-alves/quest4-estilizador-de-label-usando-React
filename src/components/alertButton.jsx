import { useState } from 'react';

function AlertButton({ newLabel, onCreation }) {
    const [ label, setLabel ] = useState({ text: "", colorName: "Vermelho", colorHex: "#242424", opacity: "0"});
    
    function handleLabelChange() {
        setLabel({
            text: newLabel.text,
            colorName: newLabel.colorName,
            colorHex: newLabel.colorHex,
            opacity: "1"
        });
        onCreation(true);
        alert(`A label desse botão é ${newLabel.text}`)
    }

    return (
        <>
            <button
                onClick={handleLabelChange}
                style={{
                    color: label.colorHex,
                    marginBottom: "1rem",
                    webkitTextStroke: label.opacity === "0" ? "0.1rem transparent" : "0.1rem rgba(0, 0, 0, 0.2)"  
                }}
                disabled={newLabel.text === ""}>{label.text === "" ? "Gerar Label" : label.text.toUpperCase()}</button>
            <h2
                className="display-label"
                style={{ opacity: label.opacity }}
            >A label desse botão agora é "{label.text}" na cor {label.colorName.toLowerCase()}</h2>
        </>
    )
}

export default AlertButton;