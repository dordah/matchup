import React, { Component } from 'react';


export class Player extends Component {

    getStyle = () => {
        let styleSelected = this.props.player.selected ? 'tc bg-gold dib br3 pa3 ma3 grow ba bw2 b--gold shadow-5' : 'tc bg-black dib br3 pa3 ma3 grow bw2 shadow-5';
        return styleSelected
    }

    render() {
        const { id, name, pic, position } = this.props.player;
        return (
            <div className={this.getStyle()} onClick={this.props.markSelected.bind(this, id)}>
                <img alt='player' src={pic}
                    style={{ height: '100px', width: '100px' }} />
                <div style={{ color: 'white' }}>
                    <h2 className='pa2' style={{fontSize : '14px', fontFamily: 'Roboto' }}>{name}</h2>
                    <p style={{fontSize : '10px', fontFamily: 'Roboto' }}>{position}</p>
                </div>
            </div>
        )
    }
}

export default Player;