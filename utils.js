export function getEndpoints() {
  return fetch(`https://charliesdatabase.onrender.com/api`).then((res) => {
    return res.json();
  });
}

export function getReviews() {
  return fetch(`https://charliesdatabase.onrender.com/api/reviews`).then(
    (res) => {
      return res.json();
    }
  );
}
