import React, { Component } from 'react';
import Player from './Player';


class Players extends Component {
    render() {
        return this.props.players.map((player) => (
            <Player key={player.id}
                player={player}
                markSelected={this.props.markSelected} />
        ));
    }
}


export default Players;