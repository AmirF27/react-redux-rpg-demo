import React, { Component } from 'react';
import { connect } from 'react-redux';

class Monster extends Component {
  render() {
    return (
      <section>
        <hr />
        <h3>Monster</h3>
        <ul className="health">
          <li>Health: {this.props.monster.stats.health}/{this.props.monster.stats.maxHealth}</li>
          <li>Strength: {this.props.monster.stats.strength}</li>
        </ul>
      </section>
    );
  }
}



function mapStateToProps(state) {
  return {
    monster: state.monster
  };
}

export default connect(
  mapStateToProps,
  null
)(Monster);