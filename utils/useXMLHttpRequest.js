import { useState, useEffect } from 'react';

export default function useXMLHttpRequest(method, url, responseType = 'text') {
  const [state, setState] = useState([null, 'loading']);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = responseType;
    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 304) {
        setState([xhr.response, 'success']);
      } else {
        setState([xhr.statusText, 'error']);
      }
    }
    xhr.onerror = () => {
      setState(['Request failed', 'error']);
    }
    xhr.open(method, url);
    xhr.send();

    return () => {
      xhr.abort();
    }
  }, []);

  return state;
}
