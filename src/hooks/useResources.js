import {getResources, setResources} from '../redux/slices/resource';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState, useCallback} from 'react';

export default function useResources({indicator, limit}) {
  const dispatch = useDispatch();
  const {isLoading, resources} = useSelector(state => state.resource);
  const [data, setData] = useState([]);

  const getMore = useCallback(() => {
    const newData = resources.slice(data.length, data.length + limit);
    if (newData.length > 0) {
      const updatedData = [...data, ...newData];
      setData(updatedData);
    }
  }, [resources, data, limit]);

  useEffect(() => {
    dispatch(getResources(indicator));
    return () => {
      dispatch(setResources([]));
    };
  }, [dispatch, indicator]);

  useEffect(() => {
    if (resources.length > 0) {
      setData(resources.slice(0, limit));
    }
  }, [resources, limit]);

  return {
    isLoading,
    data,
    getMore,
  };
}
