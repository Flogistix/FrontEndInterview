export const fetchSubs = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { label: '1 Month', value: 1 },
        { label: '2 Months', value: 2 },
        { label: '3 Months', value: 3 },
        { label: '4 Months', value: 4 },
      ])
    }, 5000);
  });
};
