import "./style";
import { render } from "preact";
import { useContext } from "preact/hooks";
import {
  TranslateProvider,
  TranslateContext
} from "@denysvuika/preact-translate";

function App() {
  const { setLang, t, lang } = useContext(TranslateContext);
  return (
    <div>
      <div>Lang: {lang}</div>
      <div>{t("title")}</div>
      <div>{t("subtitle")}</div>
      <div>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("it")}>IT</button>
      </div>
    </div>
  );
}

if (typeof window !== "undefined") {
  render(
    <TranslateProvider>
      <App />
    </TranslateProvider>,
    document.getElementById("root")
  );
}
