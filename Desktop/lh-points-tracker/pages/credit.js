import { useState } from 'react';

export default function TransferDetails() {
  const [selectedCard, setSelectedCard] = useState('');
  const [transferDetails, setTransferDetails] = useState(null);

  const data = [
    { card: "American Express", partner: "Aer Lingus", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "Aeromexico", ratio: "1:1.6", time: "Up to 7 days", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "Air Canada", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "Air France/KLM", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "Alaska Airlines", ratio: "1:1 via Hawaiian Airlines", time: "up to 2 hours", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "All Nippon Airways", ratio: "1:1", time: "2-3 days", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "Avianca", ratio: "1:1", time: "Up to 1 hr", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "British Airways", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "Cathay Pacific", ratio: "1:1", time: "48+ hrs", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "Delta", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "Emirates", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "Etihad", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "Finnair", ratio: "1:1 via British Airways", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "Hawaiian Air", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "Iberia", ratio: "1:1", time: "1-3 days", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "JetBlue", ratio: "2.5:2", time: "Instant", minAmount: 250, minIncrement: 250 },
{ card: "American Express", partner: "Qantas", ratio: "1:1", time: "Instant", minAmount: 500, minIncrement: 500 },
{ card: "American Express", partner: "Qatar Airways", ratio: "1:1", time: "48+ hrs", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "Singapore Airlines", ratio: "1:1", time: "Up to 24 hours", minAmount: 1000, minIncrement: 1000 },
{ card: "American Express", partner: "Virgin Atlantic", ratio: "1:1", time: "Up to 48 hours", minAmount: 1000, minIncrement: 1000 },
{ card: "Bilt", partner: "Aer Lingus", ratio: "1:1", time: "N/A", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
{ card: "Bilt", partner: "Air Canada", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
{ card: "Bilt", partner: "Air France/KLM", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
{ card: "Bilt", partner: "Alaska Airlines", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
{ card: "Bilt", partner: "Avianca", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
{ card: "Bilt", partner: "British Airways", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
{ card: "Bilt", partner: "Cathay Pacific", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
{ card: "Bilt", partner: "Emirates", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
{ card: "Bilt", partner: "Finnair", ratio: "1:1 via British Airways", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
{ card: "Bilt", partner: "Hawaiian Air", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
{ card: "Bilt", partner: "Iberia", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
{ card: "Bilt", partner: "Qatar Airways", ratio: "1:1 via British Airways", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
{ card: "Bilt", partner: "Turkish Airlines", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
{ card: "Bilt", partner: "United Airlines", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
{ card: "Bilt", partner: "Virgin Atlantic", ratio: "1:1", time: "Instant", minAmount: "1,000 (Elite status), 2,000 (Blue Status)", minIncrement: 1000 },
{ card: "Capital One", partner: "Aer Lingus", ratio: "1:1 via British Airways", time: "Instant", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "Aeromexico", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "Air Canada", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "Air France/KLM", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "Avianca", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "British Airways", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "Cathay Pacific", ratio: "1:1", time: "24-36 hrs", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "Emirates", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "Etihad", ratio: "1:1", time: "Up to 36 hrs", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "EVA AIR", ratio: "2:1.5", time: "Instant", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "Finnair", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "Iberia", ratio: "1:1 via British Airways", time: "Instant", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "Qantas", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "Qatar Airways", ratio: "1:1 via British Airways", time: "Instant", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "Singapore Airlines", ratio: "1:1", time: "Up to 48 hours", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "TAP Air Portugal", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "Turkish Airlines", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
{ card: "Capital One", partner: "Virgin Atlantic", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 100 },
{ card: "Chase", partner: "Aer Lingus", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Chase", partner: "Air Canada", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Chase", partner: "Air France/KLM", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Chase", partner: "British Airways", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Chase", partner: "Emirates", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Chase", partner: "Finnair", ratio: "1:1 via British Airways", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Chase", partner: "Iberia", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Chase", partner: "JetBlue", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Chase", partner: "Qatar Airways", ratio: "1:1 via British Airways", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Chase", partner: "Singapore Airlines", ratio: "1:1", time: "1-2 days", minAmount: 1000, minIncrement: 1000 },
{ card: "Chase", partner: "Southwest", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Chase", partner: "United Airlines", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Chase", partner: "Virgin Atlantic", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "Aer Lingus", ratio: "1:1 via Qatar, British Airways", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "Aeromexico", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "Air France/KLM", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "Avianca", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "British Airways", ratio: "1:1 via Qatar", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "Cathay Pacific", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "Emirates", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "Etihad", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "EVA AIR", ratio: "1:1", time: "1-2 days", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "Finnair", ratio: "1:1 via Qatar, British Airways", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "Iberia", ratio: "1:1 via Qatar, British Airways", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "JetBlue", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "Qantas", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "Qatar Airways", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "Singapore Airlines", ratio: "1:1", time: "24-36 hrs", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "Thai Airways", ratio: "1:1", time: "7 days", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "Turkish Airlines", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Citi", partner: "Virgin Atlantic", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Wells Fargo", partner: "Aer Lingus", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Wells Fargo", partner: "Air France/KLM", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Wells Fargo", partner: "Avianca", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Wells Fargo", partner: "British Airways", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Wells Fargo", partner: "Finnair", ratio: "1:1 via British Airways", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Wells Fargo", partner: "Iberia", ratio: "1:1", time: "N/A", minAmount: 1000, minIncrement: 1000 },
{ card: "Wells Fargo", partner: "Qatar Airways", ratio: "1:1 via British Airways", time: "Instant", minAmount: 1000, minIncrement: 1000 },
{ card: "Wells Fargo", partner: "Virgin Atlantic", ratio: "1:1", time: "Instant", minAmount: 1000, minIncrement: 1000 }
  ];
  const handleCardChange = (event) => {
    const card = event.target.value;
    setSelectedCard(card);

    // Find the details for the selected card
    const details = data.filter((item) => item.card === card);
    setTransferDetails(details);
  };

  return (
    <div>
      <h1>Credit Card Transfer Information</h1>
      <label htmlFor="creditCard">Choose a credit card: </label>
      <select id="creditCard" value={selectedCard} onChange={handleCardChange}>
        <option value="">--Select a card--</option>
        {[...new Set(data.map((item) => item.card))].map((card, index) => (
          <option key={index} value={card}>{card}</option>
        ))}
      </select>

      {transferDetails && (
        <div>
          <h2>Transfer Details for {selectedCard}</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Transfer Partner</th>
                <th>Transfer Ratio</th>
                <th>Transfer Time</th>
                <th>Minimum Transfer Amount</th>
                <th>Minimum Increments</th>
              </tr>
            </thead>
            <tbody>
              {transferDetails.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.partner}</td>
                  <td>{detail.ratio}</td>
                  <td>{detail.time}</td>
                  <td>{detail.minAmount}</td>
                  <td>{detail.minIncrement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
