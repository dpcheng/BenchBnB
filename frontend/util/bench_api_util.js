export const fetchBenches = (data) => {
  return $.ajax({
    url: "api/benches",
    error: err => console.log(err),
    data
  });
};
