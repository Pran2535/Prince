// components/Dashboard/TrendsettersCard.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TrendsetterCard({ coin }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/coin/${coin.id}`);
  };

  return (
    <div className="coin-card" onClick={handleClick}>
      <h3>
        {coin.name} ({coin.symbol.toUpperCase()})
      </h3>
      <p>Price: ${coin.current_price.toLocaleString()}</p>
      <p>24h Change: {coin.price_change_percentage_24h.toFixed(2)}%</p>
      <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
    </div>
  );
}

function TrendsettersCard({ bitcoin, ethereum }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="trendsetters-card">
      <h2 onClick={toggleExpand}>Trendsetters {isExpanded ? "▼" : "▶"}</h2>
      {isExpanded && (
        <div className="coin-cards">
          {bitcoin && <TrendsetterCard coin={bitcoin} />}
          {ethereum && <TrendsetterCard coin={ethereum} />}
        </div>
      )}
    </div>
  );
}

export default TrendsettersCard;
