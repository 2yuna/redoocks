import React from "react";
import { useSetLang, useT } from "./context";

export default () => {
  const setLang = useSetLang();
  const t = useT();
  return (
    <>
      <h1>{t("Hello!")}</h1>
      <div>{t("Did you have Lunch?")}</div>
      <button onClick={() => setLang("ko")}>{t("Translate")}</button>
    </>
  );
};
