export function fixDateFormat(dateString) {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return date.toLocaleString("en" - "en", options);
}

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

export function getSingleReview(review_id) {
  return fetch(
    `https://charliesdatabase.onrender.com/api/reviews/${review_id}`
  ).then((res) => {
    return res.json();
  });
}

export function getCommentsByReviewId(review_id) {
  return fetch(
    `https://charliesdatabase.onrender.com/api/reviews/${review_id}/comments`
  ).then((res) => {
    return res.json();
  });
}
