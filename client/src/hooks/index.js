export const useQuery = (location, key) => {
  const query = new URLSearchParams(location.search);
  return query.get(key);
};
