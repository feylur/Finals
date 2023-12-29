import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories,setError } from '../Slices/Slice';
import { Link } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

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

  return (
   <div className="emojis-section">
  <h1 className="emojis-title">Discover Animal Birds Emojis</h1>
  {categories.length === 0 ? (
    <p>Loading...</p>
  ) : (
    <div className="emojis-list">
      {categories.map((category) => (
        <div className="emoji-item" key={category.id}>
          <Link to={`/details/${category.id}`} className="emoji-link">
            <div className="emoji-details">
              <h2 className="emoji-name">{category.name}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )}
</div>


  );
}

export default Home;
