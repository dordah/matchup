import React, { Component } from 'react';


export class Player extends Component {

    getStyle = () => {
        let styleSelected = '';
        styleSelected = this.props.player.selected ? 'tc bg-black dib br3 pa3 ma3 grow ba bw2 b--gold shadow-5' : 'tc bg-black dib br3 pa3 ma3 grow bw2 shadow-5';
        return styleSelected
    }

    render() {
        const { id, name, pic, position } = this.props.player;
        return (
            <div className={this.getStyle()} onClick={this.props.markSelected.bind(this, id)}>
                <img alt='player' src={pic}
                    style={{ height: '200px', width: '200px' }} />
                <div style={{ color: 'white' }}>
                    <h2 className='pa2' style={{ fontFamily: 'Roboto' }}>{name}</h2>
                    <p style={{ fontFamily: 'Roboto' }}>{position}</p>
                </div>
            </div>
        )
    }
}

export default Player;