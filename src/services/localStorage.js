export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setNewRanking(value) {
  let ranking = getLocalStorage('ranking');
  if (!ranking) {
    ranking = [];
  }
  ranking.push(value);
  ranking = ranking.sort((a, b) => b.score - a.score);
  setLocalStorage('ranking', ranking);
}
