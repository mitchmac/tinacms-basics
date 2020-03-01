import React, { useState } from "react";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Code(props) {
    const [show, setVisibility] = useState(false);
    return (
        <div>
            <div style={{width: '100%', textAlign: 'right' }}>
                <button
                    onClick={() => setVisibility(!show)}
                    style={{ padding: 10}}
                >
                    Toggle Code
                </button>
            </div>
            {show &&
                <div style={{width: '100%' }}>
                    <SyntaxHighlighter language="javascript" style={prism}>
                        {props.code}
                    </SyntaxHighlighter>
                </div>
            }
        </div>
    );
}
