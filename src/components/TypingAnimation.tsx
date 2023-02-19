import React, { useState, useEffect } from 'react';

interface Props {
    texts: string[];
    speed?: number;
    cursor?: string;
    cursorSpeed?: number;
    cursorBlink?: boolean;
}

const TypingAnimation: React.FC<Props> = ({ 
    texts, 
    speed = 50, 
    cursor = '_', 
    cursorSpeed = speed / 2, 
    cursorBlink = true
}) => { 
    const [displayText, setDisplayText] = useState('');
    const [cursorDisplay, setCursorDisplay] = useState(cursor);
    const [index, setIndex] = useState(0);
    const [currentText, setCurrentText] = useState(0)

    const text = texts[currentText]

    useEffect(() => {
        let intervalId = setInterval(() => {
            setDisplayText(text.slice(0, index + 1));
            setIndex(index + 1);
            if (index === text.length) {
                clearInterval(intervalId);
                setCurrentText(currentText + 1 >= texts.length ? 0 : currentText + 1)
            }
        }, speed);
        return () => clearInterval(intervalId);
    }, [index, speed, text, currentText]);

    useEffect(() => {
        if(cursorBlink){
            let intervalId = setInterval(() => {
                setCursorDisplay(prev => prev === cursor ? ' ' : cursor);
            }, cursorSpeed);
            return () => clearInterval(intervalId);
        }
    }, [cursor, cursorBlink, cursorSpeed]);
  
    return (
        <>
            <span>{displayText}</span>
            {index < text.length && (
                <span style={{ opacity: cursorBlink ? 1 : 0 }}>{cursorDisplay}</span>
            )}
        </>
    );
};

export default TypingAnimation;
