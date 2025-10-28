import React, { useState, useEffect } from "react";
import FeedbackList from "../components/FeedbackList";

export default function Dashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedback = async () => {
    try {
      const res = await fetch("https://backend-feedback-f8jc.onrender.com/add");
      const data = await res.json();
      setFeedbacks(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this feedback?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://backend-feedback-f8jc.onrender.com/add/${id}`, {
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
      <FeedbackList feedbacks={feedbacks} onDelete={handleDelete} />
    </div>
  );
}





