import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import Result from "./components/Result";
import "./App.css";
import { okaidia } from "@uiw/codemirror-theme-okaidia";

function CodePen() {
  //* create three usestate
  const [html_edit, setHtml_Edit] = useState("");
  const [css_edit, setCss_Edit] = useState("");
  const [js_edit, setJs_Edit] = useState("");

  //* Html onchange handler
  const onChangeHtml = useCallback((value) => {
    console.log(value);
    setHtml_Edit(value);
  }, []);

  //* Css onchange handler
  const onChangeCss = useCallback((value) => {
    console.log(value);
    setCss_Edit(value);
  }, []);

  //* JavaScript onchange handler
  const onChangeJavaScript = useCallback((value) => {
    console.log(value);
    setJs_Edit(value);
  }, []);

  //* Create Html Document
  const srcCode = `
  <html>
  <body>${html_edit}</body>
  <style>${css_edit}</style>
  <script>${js_edit}</script>
  </html>
  `;

  return (
    <div>
      {/* Navbar  */}
      <Navbar />

      {/* main content  */}
      <div className=" p-2">
        {/* Editor  */}
        <div className="code-mirrors-container">
          {/* Html Editor */}
          <div className="code-mirror-full-box">
            <h2 className="code-mirror-heading">HTML</h2>
            <CodeMirror
              className="code-mirror-card"
              value={html_edit}
              height="280px"
              theme={okaidia}
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
          </div>

          {/* Css Editor  */}
          <div className="code-mirror-full-box">
            <h2 className="code-mirror-heading">CSS</h2>
            <CodeMirror
              className="code-mirror-card"
              value={css_edit}
              height="280px"
              theme={okaidia}
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
          </div>

          {/* JavaScript Editor  */}
          <div className="code-mirror-full-box">
            <h2 className="code-mirror-heading">JavaScript</h2>
            <CodeMirror
              className="code-mirror-card"
              value={js_edit}
              height="280px"
              theme={okaidia}
              extensions={[javascript(true)]}
              onChange={onChangeJavaScript}
            />
          </div>
        </div>

        <Result srcCode={srcCode} />
      </div>
    </div>
  );
}

export default CodePen;
