import React from "react";
// Footer.js
import "../App.css";


export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Student Feedback App. All rights reserved.</p>
      </div>
    </footer>
  );
}
