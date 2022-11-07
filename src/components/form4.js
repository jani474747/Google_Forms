import React from "react";
import RGF from "react-google-forms";

export default function App() {
  const formConfig = {
    loadingText: "welcome",
    formURL: (
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe-hkIF_aUC2xfql5Q2A8TgFNbEhfHaY_sL4zzR7_vyfw77ng/viewform?usp=sf_link"
        width="640"
        height="947"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    )
  };

  return (
    <div className="App">
      

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe-hkIF_aUC2xfql5Q2A8TgFNbEhfHaY_sL4zzR7_vyfw77ng/viewform?usp=sf_link"
        width="640"
        height="947"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}
