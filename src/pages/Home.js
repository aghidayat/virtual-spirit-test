import React from 'react';
import { Card, Form } from './../components';

function Home() {
    let cards = [];
    for (var i = 1; i <= 10; i++) {
        cards.push(<Card id={i} key={`card-${i}`} />);
    }

    return (
        <div className='container mt-5 mb-2'>
            <div>
                <Form />
            </div>
            <div>{cards}</div>
        </div>
    );
}

export default Home;
