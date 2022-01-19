import React, { Component } from 'react';
import { getLocalStorage } from '../services/localStorage';

export default class RankingList extends Component {
  constructor() {
    super();

    this.state = {
      list: getLocalStorage('ranking'),
    };
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        {!list
          ? (<h2>Ainda não há ninguém no Ranking</h2>)
          : (
            list.map(({ name, picture, score }, index) => (
              <div key={ index }>
                <img src={ picture } alt={ name } />
                <span data-testid={ `player-name-${index}` }>{ name }</span>
                <span data-testid={ `player-score-${index}` }>{ score }</span>
              </div>
            ))
          )}
      </div>
    );
  }
}
