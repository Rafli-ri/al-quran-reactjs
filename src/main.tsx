import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AlquranContextProvider } from "./store/quran-context.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AlquranContextProvider>
      <App />
    </AlquranContextProvider>
  </BrowserRouter>
);
