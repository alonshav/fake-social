import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { FetchAction, FetchState, LoadingStatus } from '@types';

function useFetch(url: string):FetchState {

  const initialFetchState = {
    data: '',
    error: null,
    loadingStatus: LoadingStatus.idle
  };

  const [fetchState, fetchDispatch] = useReducer(fetchReducer, initialFetchState);

  async function fetchData() {
    fetchDispatch({ type: 'FETCH' });
    try {
      const res = await axios.get(url);
      if (res.status === 200) {
        fetchDispatch({type:'RESOLVE',payload:res.data})
        console.log('res:', res);
      }
    } catch (e) {
      fetchDispatch({type:'REJECT', error:`${e}`})
      console.error(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return fetchState;
}

function fetchReducer(currentState: FetchState, action: FetchAction): FetchState {
  switch (action.type) {
    case 'FETCH':
      return {
        ...currentState,
        loadingStatus: LoadingStatus.loading
      };
    case 'RESOLVE':
      return {
        loadingStatus: LoadingStatus.success,
        data: action.payload,
        error: null
      };
    case 'REJECT':
      return {
        data: null,
        loadingStatus: LoadingStatus.failed,
        error: action.error
      };
    default:
      return currentState;
  }
}

export default useFetch
