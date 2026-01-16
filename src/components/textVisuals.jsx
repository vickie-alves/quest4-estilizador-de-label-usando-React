import { useState } from 'react';

function TextVisuals({ textMessage, textColor, isLabelCreated, onCreation }) {
    const [ textDisplay, setTextDisplay ] = useState({ opacity: "0", text: "?", color: "#242424" })

    function handleTextDisplay() {
        onCreation(false);
        setTextDisplay({ opacity: "1", text: textMessage, color: textColor });
    }

    return (
        <>
            <button
                onClick={handleTextDisplay}
                style={{ color: "#242424" }}
                disabled={textMessage === ""}>Estilizar Texto</button>
            <h2 
                className="display-text"
                style={{
                    opacity: isLabelCreated === true ? 0 : textDisplay.opacity,
                    color: textDisplay.color,

                }}>{isLabelCreated === true ? "?" : textDisplay.text.toUpperCase()}</h2>
        </>
    )
}

export default TextVisuals;