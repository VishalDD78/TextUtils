import React, { useState } from 'react'
import jsPDF from 'jspdf';

export default function TextForm(props) {

    const [text, setText] = useState("");

    const onUpperCaseBtn = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }

    const onLowerCaseBtn = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
    }

    const onExtractEmails = () => {
        const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
        const extractedEmails = text.match(emailRegex) || [];
        const uniqEmails = [...new Set(extractedEmails)];
        const formattedEmails = uniqEmails.join(', ');
        setText(formattedEmails);
        props.showAlert("Emails has been extracted from text", "success");
    }

    const onDownloadText = () => {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'textFile.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        props.showAlert("Text file downloaded", "success");
    }

    const onDownloadPdf = () => {
        const doc = new jsPDF();
        doc.text(text, 10, 10);
        doc.save('textFile.pdf');
        props.showAlert("PDF file downloaded", "success");
    }

    const onCopyClipboard = () => {
        // * commented cod eis for select all text
        // let text = document.getElementById("myBox");
        // text.select();                
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const onRemoveExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const onClearBtn = () => {
        setText('');
        props.showAlert("Text has been cleared", "success");
    }

    const onChangeText = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div>
                <h1 style={{ color: props.mode === 'light' ? '#212529' : 'white' }}>{props.headingText}</h1>
                <div className="mb-3">
                    <textarea className="form-control"
                        value={text} onChange={onChangeText}
                        id="myBox" rows="10"
                        placeholder='Enter Text here'
                        style={{
                            backgroundColor: props.mode === 'light' ? 'white' : '#212529',
                            color: props.mode === 'light' ? '#212529' : 'white'
                        }}
                    ></textarea>
                </div>
                <button disabled={text.length === 0} style={{ border: '1px solid white' }} className="btn btn-primary mx-1 my-1" onClick={onUpperCaseBtn}>Convert to Upper Case</button>
                <button disabled={text.length === 0} style={{ border: '1px solid white' }} className="btn btn-primary mx-1 my-1" onClick={onLowerCaseBtn}>Convert to Lower Case</button>
                <button disabled={text.length === 0} style={{ border: '1px solid white' }} className="btn btn-primary mx-1 my-1" onClick={onClearBtn}>Clear All</button>
                <button disabled={text.length === 0} style={{ border: '1px solid white' }} className="btn btn-primary mx-1 my-1" onClick={onExtractEmails}>Extract Emails</button>
                <button disabled={text.length === 0} style={{ border: '1px solid white' }} className="btn btn-info mx-1 my-1" onClick={onDownloadText}>Download Text File</button>
                <button disabled={text.length === 0} style={{ border: '1px solid white' }} className="btn btn-danger mx-1 my-1" onClick={onDownloadPdf}>Download pdf</button>
                <button disabled={text.length === 0} style={{ border: '1px solid white' }} className="btn btn-primary mx-1 my-1" onClick={onCopyClipboard}>Copy to Clipboard</button>
                <button disabled={text.length === 0} style={{ border: '1px solid white' }} className="btn btn-primary mx-1 my-1" onClick={onRemoveExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#212529' : 'white' }}>
                <h1 >Your text summary</h1>
                {/* <p >{text === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p> */}
                <p >{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p >{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2 >Preview</h2>
                <p >{text}</p>
            </div>
        </>
    )
}
