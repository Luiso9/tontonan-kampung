import React, { useState, useEffect } from "react";
import "./ErrorAlert.css";

export default function ErrorAlert({ message }) {
	const [isVisible, setIsVisible] = useState(true);
	const [isFading, setIsFading] = useState(false);

	const handleClose = () => {
		setIsFading(true);
		setTimeout(() => setIsVisible(false), 300);
	};

    // If nor error dont display message
	if (!message || !isVisible) return null; 

	return (
		<div
			role="alert"
			className={`alert alert-error fixed bottom-4 right-4 flex items-center justify-between space-x-4 transition-opacity ${
				isFading ? "fade-out" : "fade-in"
			}`}
		>
			<div className="flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 shrink-0 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span className="text-sm md:text-base break-words">Error! {message}</span>
			</div>
			<button
				onClick={handleClose}
				className="ml-auto text-neutral-50 hover:text-neutral-300"
				aria-label="Close"
			>
				&times;
			</button>
		</div>
	);
}
