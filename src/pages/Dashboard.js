import React, { useState, useEffect } from "react";
import FeedbackList from "../components/FeedbackList";

export default function Dashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState("");

  // Fetch all feedback
  const fetchFeedback = async () => {
    try {
      const res = await fetch("https://backend-feedback-f8jc.onrender.com/feedback");
      if (!res.ok) throw new Error("Failed to fetch feedback");
      const data = await res.json();
      setFeedbacks(data);
    } catch (err) {
      console.error(err);
      setError("Could not load feedback. Please try again later.");
    }
  };

  // Delete feedback
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this feedback?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://backend-feedback-f8jc.onrender.com/feedback/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      setFeedbacks(feedbacks.filter((fb) => fb.id !== id));
      alert("Feedback deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete feedback. Please try again.");
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div>
      <h1>Student Feedback Dashboard</h1>
      {error && <p className="error">{error}</p>}
      {feedbacks.length === 0 && !error && <p>No feedback available.</p>}
      {feedbacks.length > 0 && (
        <FeedbackList feedbacks={feedbacks} onDelete={handleDelete} />
      )}
    </div>
  );
}






