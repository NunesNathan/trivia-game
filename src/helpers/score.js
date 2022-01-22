export const calculatePoints = (difficulty, time) => {
  const pointsForDifficulty = { easy: 1, medium: 2, hard: 3 };
  const INITIAL_POINTS = 10;
  const points = INITIAL_POINTS + (time * pointsForDifficulty[difficulty]);
  return points;
};

export const progressBar = () => {
  let initialTime = 100;
  const progress = document.getElementsByClassName('progress-bar')
  return (setInterval(() => {
    if (initialTime > -1) {
      initialTime = initialTime - 1;
      progress[0].style.width = initialTime + '%';
    } else {
      clearInterval(progressBar())
    }
  }, 300))
};
