import React from "react";

function Loading() {
    return (
        <div className="flex justify-center items-center mx-auto text-white min-h-screen">
            <span className="loading loading-spinner loading-lg">.</span>
        </div>
    );
}

export default Loading;
