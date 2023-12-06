import { useEffect } from "react";
import "./DataSelector.css";

const url = "http://localhost:8001/tickers";

export default function DataSelector({
  ticker,
  setTicker,
  getTickerData,
  setTickerDataFetched,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  tickers,
  setTickers,
}) {
  const handleTickerChange = (e) => {
    setTicker(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleFetchButtonClick = async () => {
    if (!startDate || !endDate) return;

    try {
      // Fetch the ticker data
      await getTickerData();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchTickers = async () => {
      try {
        // Fetch the tickers
        const response = await fetch(url);
        const data = await response.json();
        setTickers(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTickers();
  }, [setTickers]);

  return (
    <div className="selector-container">
      <h1>Select Ticker</h1>
      <div className="selector">
        <label>
          Ticker:
          <input onChange={handleTickerChange} value={ticker}></input>
        </label>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </label>
        <label>
          End Date:
          <input type="date" value={endDate} onChange={handleEndDateChange} />
        </label>
        <button onClick={handleFetchButtonClick}>Fetch Ticker Data</button>
      </div>
    </div>
  );
}

// import { useEffect } from "react";
// import "./DataSelector.css";

// const url = "http://localhost:8001/tickers";

// export default function DataSelector({
//   ticker,
//   setTicker,
//   getTickerData,
//   setTickerDataFetched,
//   startDate,
//   setStartDate,
//   endDate,
//   setEndDate,
//   tickers,
//   setTickers,
// }) {
//   const handleTickerChange = (e) => {
//     setTicker(e.target.value);
//   };

//   const handleStartDateChange = (e) => {
//     setStartDate(e.target.value);
//   };

//   const handleEndDateChange = (e) => {
//     setEndDate(e.target.value);
//   };

//   const handleFetchButtonClick = async () => {
//     if (!startDate || !endDate) return;

//     // if (tickers.includes(ticker)) {
//     try {
//       //fetching the ticker data
//       getTickerData();
//     } catch (err) {
//       console.log(err);
//     }
//     // } else {
//     //   console.log(`Ticker ${ticker} does not exist`);
//     // }
//   };

//   useEffect(() => {
//     const fetchTickers = async () => {
//       try {
//         const response = await axios.get(url);
//         const data = response.data;
//         setTickers(data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchTickers();
//   }, [setTickers]);
//   return (
//     <div className="selector-container">
//       <h1>Select Ticker</h1>
//       <div className="selector">
//         <label>
//           Ticker:
//           <input onChange={handleTickerChange} value={ticker}></input>
//         </label>
//         <label>
//           Start Date:
//           <input
//             type="date"
//             value={startDate}
//             onChange={handleStartDateChange}
//           />
//         </label>
//         <label>
//           End Date:
//           <input type="date" value={endDate} onChange={handleEndDateChange} />
//         </label>
//         <button onClick={handleFetchButtonClick}>Fetch Ticker Data</button>
//       </div>
//     </div>
//   );
// }
