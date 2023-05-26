import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import "./i18n";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./redux/store";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
