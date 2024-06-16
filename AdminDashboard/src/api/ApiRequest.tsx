import React, { useState, useEffect } from 'react';

interface RequestData {
  [key: string]: any;
}

interface RequestProps {
  url: string;
  data?: RequestData;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

const ApiRequest: React.FC<RequestProps> = ({ url, data, method = 'GET' }) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const requestOptions: RequestInit = {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
        };

        if (data && (method === 'POST' || method === 'PUT')) {
          requestOptions.body = JSON.stringify(data);
        }

        const fetchResponse = await fetch(url, requestOptions);
        const responseData = await fetchResponse.json();

        if (!fetchResponse.ok) {
          throw new Error(`HTTP error ${fetchResponse.status}`);
        }

        setResponse(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, data, method]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {response && (
        <pre>
          <code>{JSON.stringify(response, null, 2)}</code>
        </pre>
      )}
    </div>
  );
};

export default ApiRequest;