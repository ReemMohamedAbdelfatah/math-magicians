
import { useEffect, useState } from 'react';

// This component fetches and displays quotes about computers using an external API.
const WordSection = () => {
  // State variables for storing the quote, loading status, and error message.
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UseEffect hook to fetch quotes when the component mounts.
  useEffect(() => {
    const api = 'https://api.api-ninjas.com/v1/quotes?category=computers';

    // Make a GET request to the API with a custom API key.
    fetch(api, {
      method: 'GET',
      headers: { 'X-Api-Key': 'amZjXXD3LYh4lr7heCH87iGfPjaKYgoOltpCtXut' },
      contentType: 'application/json',
    })
      .then((response) => {
        // If the response is not OK, set the error message.
        if (!response.ok) {
          setError(true);
        }
        return response.json();
      })
      .then((data) => {
        // If the response is successful, store the quote and set loading to false.
        setQuote(data);
        setLoading(false);
      })
      .catch((error) => {
        // If there is an error, set the error message and set loading to false.
        setError(error);
        setLoading(false);
      });
  }, []);

  // If the data is still loading, display a loading message.
  if (loading) {
    return (
      <div className="quotes">
        <p className="author">Loading quotes...</p>
      </div>
    );
  }

  // If there is an error, display the error message.
  if (error) {
    return (
      <div className="quotes">
        <p className="author">
          Sorry, an error occurred:
          {error.message}
        </p>
      </div>
    );
  }

  // If there are no quotes, return null.
  if (quote && quote.length === 0) {
    setError(new Error('No quotes found'));
  }

  // If there are quotes, display them with the author name.
  return (
    <div className="quotes">
      {quote.map((x) => <p key={0}>{x.quote}</p>)}
      {quote.map((x) => (
        <p className="author" key={0}>
          -&nbsp;
          {x.author}
        </p>
      ))}
    </div>
  );
};

export default WordSection;

