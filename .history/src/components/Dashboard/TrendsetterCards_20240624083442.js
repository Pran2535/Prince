// components/Dashboard/CustomCardComponent.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomCardComponent.css"; // Make sure to create this CSS file

function CoinCard({ coin }) {
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

function CustomCardComponent({ cardName, coins }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="custom-card-wrapper">
      <div className="custom-card-header" onClick={toggleExpand}>
        <h2>
          {cardName} {isExpanded ? "▼" : "▶"}
        </h2>
      </div>
      {isExpanded && (
        <div className="custom-card-content">
          {coins.map((coin, index) => (
            <CoinCard key={index} coin={coin} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomCardComponent;
