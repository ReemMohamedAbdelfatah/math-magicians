import { useState, useEffect } from 'react';

function Quotes() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            method: 'GET',
            headers: { 'X-Api-Key': 'GzslFHrh84rXy/9MKOM6Ew==wTmPvGTvwoh0VVxI' },
          });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="dataDiv">
      <h1>Quote of the day</h1>
      {data.length > 0 ? (
        <div className="dataDetails">

          <p>
            {data[0].quote}
            :
            <span>
              {' '}
              {data[0].author}
            </span>
          </p>
        </div>
      ) : (
        <p />
      )}

    </div>
  );
}

export default Quotes;
