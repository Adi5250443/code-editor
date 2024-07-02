import React, { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';

const CodeEditor = () => {
    const [code, setCode] = useState('');
    const textareaRef = useRef(null);
    const preRef = useRef(null);

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    const handleInput = (event) => {
        const newCode = event.target.value;
        setCode(newCode);
        adjustTextareaHeight();
    };

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        const pre = preRef.current;
        if (textarea && pre) {
            textarea.style.height = 'auto';
            textarea.style.height = pre.offsetHeight + 'px';
        }
    };

    const handlePaste = (event) => {
        const pastedText = event.clipboardData.getData('text');
        setCode(pastedText);
        adjustTextareaHeight();
    };

    return (
        <div style={{ width: '90%', height: "100%" }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1 style={{ fontFamily: 'monospace', fontSize: '40px',color:'whitesmoke' }}>Code Editor</h1>
            </div>
            <div style={{ position: 'relative', width: '90%', height: '500px', margin: '0 auto', border: '2px solid #ccc', borderRadius: '5px' }}>
                <textarea
                    ref={textareaRef}
                    value={code}
                    onChange={handleInput}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: 'auto',
                        minHeight: '100px',
                        padding: '10px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        color: 'transparent',
                        backgroundColor: 'transparent',
                        border: 'none',
                        resize: 'none',
                        overflow: 'hidden',
                        whiteSpace: 'pre-wrap',
                        outline: 'none',
                        zIndex: 1,
                        caretColor: 'white', 
                    }}
                    spellCheck={false}
                />
                <div
                    style={{
                        position: 'relative',
                        minHeight: '100px',
                        overflow: 'scroll',
                        maxHeight: '500px',
                    }}
                >
                    <pre
                        ref={preRef}
                        className="language-javascript"
                        style={{
                            margin: 0,
                            padding: '10px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            color: 'white',
                            backgroundColor: '#2d2d2d',
                            borderRadius: '5px',
                            boxSizing: 'border-box',
                        }}
                        onPaste={handlePaste}
                        contentEditable={true}
                    >
                        <code className="language-javascript">{code}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default CodeEditor;
