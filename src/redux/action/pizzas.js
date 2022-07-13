import axios from 'axios';

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (sortBy, category) => dispath => {
  dispath(setLoaded(false));

  axios
    .get(
      `/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy}&_order=desc`
    )
    .then(({ data }) => {
      dispath(setPizzas(data));
    }, []);
};

export const setPizzas = items => ({
  type: 'SET_PIZZAS',
  payload: items,
});
