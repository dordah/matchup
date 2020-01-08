import React from 'react'


export default function About() {

    const pStyle = {
        lineHeight: '2',
        marginTop: '10px',
        marginLeft: '20px'
    }

    return (
        <React.Fragment>
            <div style={{ margin: '40px', marginTop: '50px' }}>
                <h2>Match Up App</h2>
                <p style={pStyle}>
                    Generate a full fair Match Up selection allows you kick-off right away.
                    <br /> Friendly use declaration players who will take part in the game and submit, the appliction will balance for you two different teams that base on the players's overall ablities.
                    <br /> As opposed to manual selection, the program does not prioritize one player over another. According that perception the best player will not necessarily draft first.
                    <br /> First the program pick player randomly for one of the teams, afterward moderated to counterbalance the bout in the second team base on conditional probabilty.
                    <br /> The process end when the teams are fully occupide.
                </p>
            </div>
            <div style={{ margin: '40px' }}>
                <h2>How Do I Use It ?</h2>
                <p style={pStyle}>
                    Advance to the Home page, there you will find the players list.
                    <br /> Click on each player that inted to participate in the match. The border indicates the player selected. Can be toggle off for non-participate by clicking the player again.
                    <br /> Hit the submit button on the lower bar, and we I'll do the trick for you.
                </p>
            </div>
            <div style={{ margin: '40px' }}>
                <h2>Technology Breakdown</h2>
                <p style={pStyle}>
                    The App built using React.JS Library.
                    <br /> The page transition implemented through React Router DOM. Enable to reach 'About' and 'Home' render with detecting a direct path.
                    <br /> Using Tachyons component library for player's card design and simplified css modification.
                    <br /> The player's images croped using Photoshop in the frame of the player's form to unable matching backgroung.
                </p>
            </div>
        </React.Fragment>
    )
}
