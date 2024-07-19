// components/Dashboard/TrendsettersCard.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrendSetterCard.css"; // Make sure to create this CSS file

function TrendsetterCard({ coin }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation(); // Prevent triggering parent's onClick
    navigate(`/coin/${coin.id}`);
  };

  return (
    <div className="outer" onClick={handleClick}>
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

function TrendsettersCard({ bitcoin, ethereum }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="trendsetters-wrapper">
      <div className="trendsetters-header" onClick={toggleExpand}>
        <h2>Trendsetters {isExpanded ? "▼" : "▶"}</h2>
      </div>
      {isExpanded && (
        <div className="trendsetters-content">
          {bitcoin && <TrendsetterCard coin={bitcoin} />}
          {ethereum && <TrendsetterCard coin={ethereum} />}
          {solana && <TrendsetterCard coin={solana} />}
        </div>
      )}
    </div>
  );
}

export default TrendsettersCard;
