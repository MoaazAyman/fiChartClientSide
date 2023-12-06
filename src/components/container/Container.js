import React, { useState, useEffect } from "react";
import MyChart from "../myChart/MyChart";
import DataSelector from "../dataSelector/DataSelector";
import Details from "../details/Details";
import "./Container.css";
const { io } = require("socket.io-client");

const secUrl = "http://localhost:8000/data";

const Container = () => {
  const [tickers, setTickers] = useState([]);
  const [ticker, setTicker] = useState("");
  const [tickerDataFetched, setTickerDataFetched] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Getting the ticker data using fetch
  const getTickerData = async () => {
    try {
      const response = await fetch(secUrl);
      const data = await response.json();

      console.log(data);

      if (data) {
        setTickerDataFetched(data);
        setFetched(!fetched);
      } else {
        throw new Error("Ticker data was not fetched");
      }
    } catch (error) {
      console.error("Error fetching ticker data:", error);
    }
  };

  useEffect(() => {
    const socket = io("http://localhost:4000");
    console.log(socket);
  }, []);

  return (
    <div className="container">
      {!fetched ? (
        <DataSelector
          ticker={ticker}
          setTicker={setTicker}
          getTickerData={getTickerData}
          setTickerDataFetched={setTickerDataFetched}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          tickers={tickers}
          setTickers={setTickers}
        />
      ) : (
        <>
          {tickers.includes(ticker) ? (
            <>
              <Details
                ticker={ticker}
                startDate={startDate}
                endDate={endDate}
              />
              <MyChart tickerDataFetched={tickerDataFetched} />
            </>
          ) : (
            <Details ticker={ticker} startDate={startDate} endDate={endDate} />
          )}
        </>
      )}
    </div>
  );
};

export default Container;
