import "./App.css";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { useState } from "react";

marked.use({
  breaks: true,
});
function App() {
  const defaultText =
    "## Write your code here \n \n ### Test several types of title \n \n # Like this \n \n Add **bold** text, *italic* or else \n \n    Test text by adding tab   \n Add some [link](https://google.fr) \n \n * Add items \n * to a list \n * like this \n \n \n ![](https://www.google.com/images/errors/logo_sm.gif) \n \n Render some code `<span>like this</span` for inline code \n \n or with blocks of code \n ```javascript \nconst JS = 'I am a block' \n``` \n \n > Blockquotes can be used that way, \n > on several lines";
  const [htmlText, setHtmlText] = useState(marked.parse(defaultText));

  const handleChange = (event) => {
    const textEditor = event.target.value;
    setHtmlText(marked.parse(textEditor));
  };

  return (
    <div>
      <div className="container edit">
        <p className="title">
          <span>
            <i className="fa-regular fa-file-code"></i>{" "}
          </span>
          <strong> Editor</strong>
        </p>
        <textarea
          id="editor"
          defaultValue={defaultText}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="container render">
        <p className="title">
          <span>
            <i className="fa-solid fa-gears"></i>
          </span>{" "}
          <strong> Preview</strong>
        </p>

        <p id="preview" dangerouslySetInnerHTML={{ __html: htmlText }}></p>
      </div>
    </div>
  );
}

export default App;
