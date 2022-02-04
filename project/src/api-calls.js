export const getFeatures = () => {
  return fetch("https://mocki.io/v1/b9c63035-97c5-40a0-b45c-2abdf5261bdf")
    .then(response => response.json())
}
