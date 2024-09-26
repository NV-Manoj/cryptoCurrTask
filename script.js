let fetchapi = async () => {
  let data = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  let jsonData = await data.json();

  let coinData = document.getElementById("collectedData");
  jsonData.forEach((currCoin) => {
    const card = document.createElement("div");
    card.className = "myCurrCard";
    card.innerHTML = ` 
              <img src="${currCoin.image}" height="200px" width="200px" alt ="${currCoin.name}"/>
              <h2>Current Price: ${currCoin.current_price}</h2>
              <h2>Market Rank: ${currCoin.market_cap_rank}</h2>`;

    coinData.appendChild(card);
  });
};

fetchapi();
