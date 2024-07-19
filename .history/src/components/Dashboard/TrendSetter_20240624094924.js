// components/Dashboard/TrendSetter.js
import React from "react";
import "./TrendSetter.css"; // Make sure to create this CSS file

function TrendSetter({ bitcoin, ethereum, solana, isActive }) {
  return (
    <div className={`trendsetters-wrapper ${isActive ? "grid-layout" : ""}`}>
      <div className="trendsetters-header">
        <h2>Trend Setters</h2>
      </div>
      <div className="trendsetters-content">
        <div className="trendsetters-cards">
          {bitcoin && <TrendSetterCard coin={bitcoin} />}
          {ethereum && <TrendSetterCard coin={ethereum} />}
          {solana && <TrendSetterCard coin={solana} />}
          {/* Add more TrendSetterCard components as needed */}
        </div>
      </div>
    </div>
  );
}

function TrendSetterCard({ coin }) {
  return (
    <div className="outer">
      <div className="dot"></div>
      <div className="card">
        <div className="ray"></div>
        <div className="text">{coin.current_price.toLocaleString()}</div>
        <div>{coin.name}</div>
        <div className="line topl"></div>
        <div className="line leftl"></div>
        <div className="line bottoml"></div>
        <div className="line rightl"></div>
      </div>
    </div>
  );
}

export default TrendSetter;
