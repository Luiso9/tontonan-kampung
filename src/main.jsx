import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Error404 from "./Errors/Error404";
import ErrorBoundary from "./Utils/ErrorBoundary/ErrorBoundary";
import Dashboard from "./Pages/Dashboard";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		),
		errorElement: <Error404 />,
	},
	{
		path: "/dashboard",
		element: (
			<ErrorBoundary>
				<Dashboard />
			</ErrorBoundary>
		),
		errorElement: <Error404 />, 
	},

	// Test
	// {
	// 	path: "/trigger-error", // Add this route temporarily
	// 	element: <Error404 />, // Render the error page for testing
	// },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
