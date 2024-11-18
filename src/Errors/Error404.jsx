import React from "react";

const Error404 = ({ error }) => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-base-300 text-neutral">
			<h1 className="text-7xl font-extrabold text-neutral-content">404</h1>
			<h2 className="mt-4 text-2xl font-semibold text-error">
				Page Not Found
			</h2>
			<p className="mt-2 text-neutral-content">
				{error?.statusText ||
					"Oops! The page you’re looking for doesn’t exist."}
			</p>
			<button
				onClick={() => (window.location.href = "/")}
				className="mt-6 px-6 py-3 text-neutral transition ease-in-out delay-150 bg-primary rounded-lg hover:bg-content duration-300 focus:outline-none focus:ring focus:ring-indigo-300"
			>
				Go Back Home
			</button>
		</div>
	);
};

export default Error404;
