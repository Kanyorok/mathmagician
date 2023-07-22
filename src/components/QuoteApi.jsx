import React, { useState, useEffect } from 'react';

const apiKey = new Headers();
apiKey.append('X-Api-Key', 'fi23b02FxA5RuBZcQMwheA==1pRuDF9DyRGAqaht');
const apiSite = 'https://api.api-ninjas.com/v/quotes?category=happiness';

export default function QuoteApi() {
  const [quote, setQuote] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [quoteLoading, setQuoteLoading] = useState(false);

  useEffect(() => {
    setQuoteLoading(true);
    const fetchQuotes = async () => {
      try {
        const response = await fetch(apiSite, {
          method: 'GET',
          headers: apiKey,
        });

        if (!response.ok) {
          setErrorMessage('Network response was not ok.');
        }

        const fetchedQuotes = await response.json();
        setQuote(fetchedQuotes);
      } catch (error) {
        setQuoteLoading(false);
        setErrorMessage(`Error fetching data: ${error.message}`);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div>
      <div className="flex flex-grow-0 items-center ml-10 justify-center max-w-1/4 rounded-md text-center w-4/6 bg-slate-600 border-solid border-black border-2">
        <div className="bg-blue-400 shadow-2xl rounded-md p-6 max-w-1/4 text-purple-700 font-bold text-center text-2xl">
          {quoteLoading ? (
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
            <p>{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}
