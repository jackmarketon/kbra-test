const spareBonus = (acc, idx) => {
  if (acc[idx + 1] === 'x') {
    return 10;
  }
  return acc[idx + 1];
};
const strikeBonus = (acc, idx) => {
  if (acc[idx + 2] === '/') {
    return 10;
  }
  if (acc[idx + 1] === 'x') {
    if (acc[idx + 2] === 'x') {
      return 20;
    }
    if (acc[idx + 2]) {
      return 10 + acc[idx + 2];
    }
    return 10;
  }
  if (acc[idx + 1] && acc[idx + 2]) {
    return acc[idx + 1] + acc[idx + 2];
  }
  return 0;
};

const convertToValues = score => {
  const num = parseInt(score, 10);
  if (Number.isNaN(num)) {
    if (score === '-') {
      return 0;
    }
    return score;
  }
  return num;
};

function calculateScore(scoring) {
  const scores = scoring
    .toLowerCase()
    .split('')
    .map(convertToValues);

  return scores.reduce((acc, value, idx, arr) => {
    if (idx >= 20 || (value === 'x' && idx >= arr.length - 2)) {
      return acc;
    }
    if (value === 'x') {
      return acc + 10 + strikeBonus(arr, idx);
    }
    if (value === '/') {
      const amount = 10 - parseInt(arr[idx - 1], 10);
      return acc + amount + spareBonus(arr, idx);
    }
    return acc + value;
  }, 0);
}

module.exports = calculateScore;
