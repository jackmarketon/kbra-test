function value(curr, idx, arr) {
  if (curr === '-' || curr === undefined) {
    return 0;
  }
  const num = parseInt(curr, 10);
  if (!isNaN(num)) {
    return num;
  }
  if (curr === '/') {
    return 10 - parseInt(arr[idx + 1]);
  }
  if (curr === 'x') {
    return 10;
  }
}

function calculateScore(scoring) {
  return scoring
    .toLowerCase()
    .split('')
    .reduce((acc, curr, idx, arr) => {
      if (curr === 'x') {
        return (
          acc +
          value(arr[idx + 1], idx + 1, arr) +
          value(arr[idx + 2], idx + 2, arr)
        );
      }
      if (curr === '/') {
        return acc + value(curr, idx, arr) + value(arr[idx + 1], idx + 1, arr);
      }
      return acc + value(curr, idx, arr);
    }, 0);
}

module.exports = calculateScore;
