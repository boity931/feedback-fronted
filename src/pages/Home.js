import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


const Home = () => {
  return (
    <div className="App">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-badge"> Student Feedback Portal</div>
          <h1 className="hero-title">
            Welcome to Limkokwing University<br />
            Student Feedback App
          </h1>
          <p className="hero-description">
            Share your course experiences and help improve the learning environment.
            Your feedback matters and shapes the future of education at Limkokwing.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="section-title">What You Can Do</h2>
        <div className="card-container">
          <div className="card feature-card">
            <div className="card-icon">📝</div>
            <h3>Submit Feedback</h3>
            <p>
              Share your honest thoughts and experiences about your courses. 
              Help us understand what's working well and what needs improvement.
            </p>
            <Link to="/feedback">
              <button className="card-button">Submit Feedback</button>
            </Link>
          </div>

          <div className="card feature-card">
            <div className="card-icon">📊</div>
            <h3>View Dashboard</h3>
            <p>
              Explore feedback from your peers and see what other students think 
              about different courses and instructors.
            </p>
            <Link to="/dashboard">
              <button className="card-button">View Dashboard</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-item">
          <div className="stat-number">1000+</div>
          <div className="stat-label">Feedback Submitted</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">Courses Reviewed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">4.5</div>
          <div className="stat-label">Average Rating</div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="info-section">
        <h2 className="section-title">Why Your Feedback Matters</h2>
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">💡</div>
            <h4>Improve Teaching</h4>
            <p>Your feedback helps instructors understand what teaching methods work best</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🎯</div>
            <h4>Course Enhancement</h4>
            <p>Help shape course content and structure for future students</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🤝</div>
            <h4>Student Voice</h4>
            <p>Be part of the decision-making process in academic planning</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🌟</div>
            <h4>Quality Assurance</h4>
            <p>Contribute to maintaining high educational standards</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Share Your Thoughts?</h2>
          <p>Your feedback takes less than 2 minutes and makes a real difference</p>
          <Link to="/feedback">
            <button className="cta-button">Get Started Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;


