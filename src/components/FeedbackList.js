import React from "react";

export default function FeedbackList({ feedbacks, onDelete }) {
  if (!Array.isArray(feedbacks)) return null;

  return (
    <div className="feedback-list">
      {feedbacks.map((fb) => (
        <div key={fb.id} className="feedback-card">
          <h3>{fb.studentName}</h3>
          <p>Course: {fb.courseCode}</p>
          <p>{fb.comments}</p>
          <p>Rating: {fb.rating}</p>
          <button onClick={() => onDelete(fb.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}



