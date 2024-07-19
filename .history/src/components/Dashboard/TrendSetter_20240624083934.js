import React from "react";
import CustomCardComponent from "./CustomCard";
function Dashboard() {
  // Example coin data
  const trendsettersCoins = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      current_price: 50000,
    },
    {
      id: "ethereum",
      name: "Ethereum",
      current_price: 3000,
    },
    {
      id: "solana",
      name: "Solana",
      current_price: 100,
    },
  ];

  return (
    <div className="dashboard">
      <CustomCardComponent cardName="Trendsetters" coins={trendsettersCoins} />
    </div>
  );
}

export default Dashboard;
