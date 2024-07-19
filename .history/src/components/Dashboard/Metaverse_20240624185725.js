import React from "react";
import CustomCardComponent from "./CustomCard";

function Metaverse() {
  // Example coin data
  const trendsettersCoins = [
    { id: "internet-computer", name: "Internet Computer", current_price: 35 },
    { id: "render", name: "Render", current_price: 2.5 },
    { id: "theta-network", name: "Theta Network", current_price: 8 },
    { id: "axie-infinity", name: "Axie Infinity", current_price: 45 },
  ];

  return (
    <div className="dashboard">
      <CustomCardComponent cardName="Trendsetters" coins={trendsettersCoins} />
    </div>
  );
}

export default Metaverse;
