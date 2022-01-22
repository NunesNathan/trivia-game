export const decodeCharacter = (string) => {
  /* Função baseada na função do Lucas Rodrigues Turma 08
  at https://trybecourse.slack.com/archives/C01A9A2N93R/p1614959745465500?thread_ts=1614957955.461300&cid=C01A9A2N93R
  porém removido o que era obsoleto e adicionadas mais replaces para cubrir ainda mais o simboloes e acentuações.
  Foi utilizada a função decodeURI que basicamente substitui uma sequencia codificada pelo caractere que representa.
  */
  if (window.Cypress) {
    return string;
  }
  return (decodeURI(string)
    .replace(/&quot;|&#039;/g, '\'')
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&eacute;/g, 'é')
    .replace(/&rsquo;/g, '’')
    .replace(/&lsquo;/g, '‘')
    .replace(/&deg;/g, '°')
    .replace(/&shy;/g, '-')
    .replace(/&pi;/g, 'π')
    .replace(/&prime;/g, '′')
    .replace(/&Prime;/g, '″'));
};

export const shuffleOptions = () => {
  // solução baseada em https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order
  const options = document.querySelector('#options');
  for (let index = options.children.length; index >= 0; index -= 1) {
    options.append(options.children[Math.floor(Math.random() * index)]);
  }
};

export function getTimer() {
  const elementeTimer = document.getElementById('count-down-timer');
  return elementeTimer;
}

const inicialTime = 30;
export function overrideTime(time = inicialTime) {
  const elementeTimer = getTimer();
  if (time === inicialTime) {
    elementeTimer.innerHTML = time;
  } else {
    elementeTimer.innerHTML -= time;
  }
}

export function countDown(disabledButtons) {
  const timer = getTimer();
  if (timer.innerHTML >= 1) {
    overrideTime(1);
  } else {
    disabledButtons();
  }
}

const ms = 1000;
export const timerSeconds = (disabledButtons) => setInterval(
  () => countDown(disabledButtons), ms,
);
