import React from "react";
import CustomCardComponent from "./CustomCard";

function TrendSetter() {
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
    {
      id: "avalanche",
      name: "Avalanche",
      current_price: 80,
    },
    {
      id: "polkadot",
      name: "Polkadot",
      current_price: 20,
    },
    {
      id: "uniswap",
      name: "Uniswap",
      current_price: 10,
    },
    {
      id: "polygon",
      name: "Polygon",
      current_price: 2,
    },
    {
      id: "thorchain",
      name: "THORChain",
      current_price: 5,
    },
    {
      id: "aave",
      name: "Aave",
      current_price: 150,
    },
    {
      id: "algorand",
      name: "Algorand",
      current_price: 1,
    },
  ];

  return (
    <div className="dashboard">
      <CustomCardComponent cardName="Trendsetters" coins={trendsettersCoins} />
    </div>
  );
}

export default TrendSetter;
