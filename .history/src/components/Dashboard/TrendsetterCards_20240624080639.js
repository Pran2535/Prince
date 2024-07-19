// components/Dashboard/TrendsettersCard.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrendSetterCard.css"; // Make sure to create this CSS file

function TrendsetterCard({ coin }) {
  const navigate = useNavigate();

  const handleClick = () => {
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
  return (
    <div className="trendsetters-container">
      <h2>Trendsetters</h2>
      <div className="trendsetters-cards">
        {bitcoin && <TrendsetterCard coin={bitcoin} />}
        {ethereum && <TrendsetterCard coin={ethereum} />}
      </div>
    </div>
  );
}

export default TrendsettersCard;
