const calculatePoints = (difficulty, time) => {
  const pointsForDifficulty = { easy: 1, medium: 2, hard: 3 };
  const INITIAL_POINTS = 10;
  const points = INITIAL_POINTS + (time * pointsForDifficulty[difficulty]);
  return points;
};

export default calculatePoints;
