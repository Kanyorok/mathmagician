import React, { useState, useEffect } from 'react';

const apiKey = new Headers();
apiKey.append('X-Api-Key', 'fi23b02FxA5RuBZcQMwheA==1pRuDF9DyRGAqaht');
const apiSite = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

export default function QuoteApi() {
  const [quote, setQuote] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(apiSite, {
          method: 'GET',
          headers: apiKey,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const fetchedQuotes = await response.json();
        setQuote(fetchedQuotes);
      } catch (error) {
        setErrorMessage(`Error fetching data: ${error.message}`);
      }
    };

    fetchQuotes();
  }, []);

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  return (
    <div>
      {quote.length > 0 ? (
        <ul>
          {quote.map((item) => (
            <li key={`${item.quote}-${item.author}`}>
              Quote:
              <br />
              {item.quote}
              <br />
              <br />
              Author:
              {' '}
              {item.author}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Quotes</p>
      )}
    </div>
  );
}
