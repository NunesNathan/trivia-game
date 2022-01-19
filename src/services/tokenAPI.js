export function fetchAPI() {
  const endPoint = 'https://opentdb.com/api_token.php?command=request';
  return fetch(endPoint)
    .then((response) => response.json());
}

export const fetchQuestions = async (token) => {
  const endPoint = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const result = await (await fetch(endPoint)).json();
  return result;
};
