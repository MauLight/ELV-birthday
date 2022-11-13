import React from 'react';

const Instructions = () => {

    const style = {
        width: '18rem'
    }

    return (
        <div className="info card mx-auto my-5 px-2" style={style}>
            <div className="card-body">
                <h5 className="instructions card-title">Instructions</h5>
                <p className="instructions-2 card-text pb-5">To add a movie name, use - instead of space, for example 'the notebook' would be 'the-notebook'.</p>
            </div>
        </div>
    )
}

export default Instructions;