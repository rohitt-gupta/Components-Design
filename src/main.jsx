import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import SnackbarProvider from "react-simple-snackbar";

ReactDOM.createRoot(document.getElementById("root")).render(
	<SnackbarProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
		,
	</SnackbarProvider>
);
