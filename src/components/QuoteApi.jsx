import React, { useState, useEffect } from 'react';

const apiKey = new Headers();
apiKey.append('X-Api-Key', 'fi23b02FxA5RuBZcQMwheA==1pRuDF9DyRGAqaht');
const apiSite = 'https://api.api-ninjas.com/v1/quotes?category=computers';

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

  if (errorMessage) {
    return (
      <div className="bg-blue-400 shadow-2xl rounded-md p-6 text-purple-700 font-bold w-4/6 h-2/6 text-center text-2xl">
        <h1>{errorMessage}</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto flex justify-between mt-14 overflow-hidden mb-2 w-full">
      <div className="flex items-center ml-10 mr-10 justify-center rounded-md text-center w-full bg-slate-600 border-solid border-black border-2">
        <div className="bg-blue-400 shadow-2xl rounded-md p-6 text-purple-700 font-bold text-center text-2xl">
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
            <p>Loading....</p>
          )}
        </div>
      </div>
    </div>
  );
}
