import fs from "fs";
import path from "path";

const loadTailwindConfigUnitTest = () => {
  const twFile = fs.readFileSync(
    path.resolve(__dirname, "./tailwind.min.css"),
    "utf8"
  );

  const head = window.document.getElementsByTagName('head')[0];

  const scriptTw = document.createElement("script");
  scriptTw.innerHTML = twFile;
  scriptTw.type = "text/css";

  head.appendChild(scriptTw);
};

export default loadTailwindConfigUnitTest;
