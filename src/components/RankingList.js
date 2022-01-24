import React, { Component } from 'react';
import { getLocalStorage } from '../services/localStorage';
import logo from '../trivia.png';
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
      <div className="container d-flex flex-row flex-wrap justify-content-center py-3">
          { !list
            ? (<h2>Ainda não há ninguém no Ranking</h2>)
            : (
              list.map(({ name, picture, score }, index) => (
                <div key={ index } className="m-3 col-md-4 col-12 col-lg-3 card">
                  <img className="ranking-card-logo" src={ logo } alt="Logo Trivia Game" />
                  <img className="ranking-card-picture" src={ picture } alt={`Card de ${name} com ${score} pontos` } />
                    <div className="main-text">
                    <p className="ranking-name">{ name }</p>
                    <p className="ranking-score">{`Total score: ${score}`}</p>
                    </div>
                  </div>
              ))
            ) }
        </div>
    );
  }
}
