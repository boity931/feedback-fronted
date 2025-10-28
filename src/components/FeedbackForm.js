import React, { useState } from "react";

export default function FeedbackForm({ onAdd }) {
  const [form, setForm] = useState({
    studentName: "",
    courseCode: "",
    comments: "",
    rating: 1,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // added success state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.studentName || !form.courseCode || !form.comments) {
      setError("All fields are required");
      setSuccess(""); // clear success if validation fails
      return;
    }
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to submit feedback");
      }

      const data = await res.json();
      if (onAdd) onAdd({ ...form, id: data.id });

      setForm({ studentName: "", courseCode: "", comments: "", rating: 1 });

      setSuccess("Feedback submitted successfully!"); // show success
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to submit feedback");
      setSuccess(""); // clear success if error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>} {/* success message */}
      <input
        name="studentName"
        value={form.studentName}
        onChange={handleChange}
        placeholder="Student Name"
      />
      <input
        name="courseCode"
        value={form.courseCode}
        onChange={handleChange}
        placeholder="Course Code"
      />
      <textarea
        name="comments"
        value={form.comments}
        onChange={handleChange}
        placeholder="Comments"
      />
      <select name="rating" value={form.rating} onChange={handleChange}>
        {[1, 2, 3, 4, 5].map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <button type="submit">Submit Feedback</button>
    </form>
  );
}






