import React from "react";
import "./Details.css";

const Details = ({ ticker, startDate, endDate }) => {
  let tickerName;

  // Assigning the corresponding company name based on the entered ticker
  switch (ticker) {
    case "AMZN":
      tickerName = "Amazon";
      break;
    case "AAPL":
      tickerName = "Apple";
      break;
    case "GOOGL":
      tickerName = "Google";
      break;
    case "MSFT":
      tickerName = "Microsoft";
      break;
    default:
      tickerName = null;
  }

  return (
    <div className="details">
      {tickerName ? (
        <>
          <h3>Financial Market Data of {tickerName}:</h3>
          <h3>From {startDate}</h3>
          <h3>To {endDate}</h3>
        </>
      ) : (
        <div className="not-found-details">
          <h2>Ticker entered is not available</h2>
        </div>
      )}
    </div>
  );
};

export default Details;
