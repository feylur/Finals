import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCategories,setError } from '../Slices/Slice';

function Main() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.categories.find((cat) => cat.id === categoryId)
  );

  useEffect(() => {
    fetch('https://emojihub.yurace.pro/api/all/group/animal-bird')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setCategories(data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  }, [dispatch]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
   ''
  );
}

export default Main;
