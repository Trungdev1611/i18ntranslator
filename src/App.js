import "./styles.css";
import { useTranslation, Trans } from "react-i18next";
export default function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header>
        <div className="flex-item logo">{t("Logo")}</div>
        <ul className="flex-item">
          <li>{t("Home")}</li>
          <li>{t("About me")}</li>
          <li>{t("Our Products")}</li>
          <li>{t("Contact Us")}</li>
        </ul>
        <div className="flex-item">{t("Sign up")}</div>
      </header>
      <button className="position">Translator</button>
    </div>
  );
}
