import React, { useState } from "react";
import useClasses from "../../hooks/useClasses";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const FeedbackForm = () => {
  const params = useParams();
  console.log(params.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = { feedback: e.target.feedback.value };
    console.log(e.target.feedback.value);
    fetch(`${import.meta.env.VITE_API_URL}/class/feedback/${params.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(feedback),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success(" feedback send to the instructor successfully");
        }
      });
  };

  return (
    <div className="w-full mx-auto py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="feedback" className="block font-semibold mb-2">
              Your Feedback
            </label>
            <input
              name="feedback"
              placeholder="Enter your feedback here"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            ></input>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
