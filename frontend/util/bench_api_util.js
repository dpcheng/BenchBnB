export const fetchBenches = (data) => (
  $.ajax({
    url: "api/benches",
    error: err => console.log(err),
    data
  })
);
