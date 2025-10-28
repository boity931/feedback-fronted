import React, { useState, useEffect } from "react";
import FeedbackList from "../components/FeedbackList";

export default function Dashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedback = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/feedback");
      const data = await res.json();
      setFeedbacks(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    // Ask for confirmation before deleting
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this feedback?"
    );
    if (!confirmDelete) return; // exit if user cancels

    try {
      const res = await fetch(`http://localhost:5000/api/feedback/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      // Update state to remove deleted feedback
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
      <FeedbackList feedbacks={feedbacks} onDelete={handleDelete} />
    </div>
  );
}





