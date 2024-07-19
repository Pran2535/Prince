// components/Dashboard/TrendsettersCard.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrendSetterCard.css";

function TrendsetterCard({ coin }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    navigate(`/coin/${coin.id}`);
  };

  return (
    <div className="outer" onClick={handleClick}>
      <div className="dot"></div>
      <div className="card">
        <div className="ray"></div>
        <div className="text">{coin.current_price.toLocaleString()}</div>
        <div>{coin.symbol.toUpperCase()}</div>
        <div className="line topl"></div>
        <div className="line leftl"></div>
        <div className="line bottoml"></div>
        <div className="line rightl"></div>
      </div>
    </div>
  );
}

function TrendsettersCard({ coins }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const trendsetterCoins = [
    "bitcoin",
    "matic-network",
    "solana",
    "polkadot",
    "avalanche-2",
    "uniswap",
    "aave",
    "algorand",
    "thorchain",
    "kusama",
    "pancakeswap-token",
    "yearn-finance",
  ];

  return (
    <div className="trendsetters-wrapper">
      <div className="trendsetters-header" onClick={toggleExpand}>
        <h2>Trendsetters {isExpanded ? "▼" : "▶"}</h2>
      </div>
      {isExpanded && (
        <div className="trendsetters-content">
          {trendsetterCoins.map((coinId) => {
            const coin = coins.find((c) => c.id === coinId);
            return coin ? <TrendsetterCard key={coin.id} coin={coin} /> : null;
          })}
        </div>
      )}
    </div>
  );
}

export default TrendsettersCard;
