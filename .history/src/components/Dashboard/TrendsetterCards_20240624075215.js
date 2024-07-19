// components/Dashboard/TrendsettersCard.js

import React from "react";

function TrendsettersCard({ bitcoin, ethereum }) {
  return (
    <div className="trendsetters-card">
      <h2>Trendsetters</h2>
      {bitcoin && (
        <div className="coin-info">
          <h3>Bitcoin (BTC)</h3>
          <p>Price: ${bitcoin.current_price.toLocaleString()}</p>
          <p>24h Change: {bitcoin.price_change_percentage_24h.toFixed(2)}%</p>
          <p>Market Cap: ${bitcoin.market_cap.toLocaleString()}</p>
        </div>
      )}
      {ethereum && (
        <div className="coin-info">
          <h3>Ethereum (ETH)</h3>
          <p>Price: ${ethereum.current_price.toLocaleString()}</p>
          <p>24h Change: {ethereum.price_change_percentage_24h.toFixed(2)}%</p>
          <p>Market Cap: ${ethereum.market_cap.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default TrendsettersCard;
