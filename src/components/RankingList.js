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
      <div>
        <div className="profile-area">
          <div className="container">
            <div className="row justify-content-center">
              { !list
                ? (<h2>Ainda não há ninguém no Ranking</h2>)
                : (
                  list.map(({ name, picture, score }, index) => (
                    <div key={ index } className="col-md-4 col-12 col-lg-3">
                      <div className="card">
                        <div className="img1"><img src={ logo } alt=""></img></div>
                        <div className="img2"><img src={ picture } alt={ name }></img></div>
                        <div className="main-text">
                          <h2 data-testid={ `player-name-${index}` }>{ name }</h2>
                          <p data-testid={ `player-score-${index}` }>{`${score} pontos`}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
