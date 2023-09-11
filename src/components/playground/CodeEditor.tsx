import React from "react";
import MonacoEditor from "react-monaco-editor/lib/editor";

const CodeEditor = () => {

  const code = `Codigo
  `;

  const handleEditorChange = (newValue:any, event:any) => {
    console.log(newValue);
  };

  return (
    <MonacoEditor
      className="m-auto"
      width="800"
      height="600"
      language="javascript"
      theme="vs-dark"
      value={code}
      onChange={handleEditorChange}
    />
  );
};


export default CodeEditor;