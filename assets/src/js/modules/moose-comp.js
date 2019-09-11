import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MooseComp extends React.Component { 
    handleClick(e) { 
        console.log('Running React App 1'); 
        alert('Moose Component is working');
    }

    render() {
        return (
            <div className="app-content container">
                <h1 className="jumbotron">This is a Moose Component</h1>
                <article>
                    <h3>Gulp React - Updated 10 Sep 2019</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate eos fugiat
                        vel necessitatibus dolores molestiae quas, praesentium similique, est minima
                        consequatur sit aspernatur nostrum nulla et maxime maiores distinctio possimus!
                    </p>
                    <button className="btn btn-danger" onClick={this.handleClick}>Click Works!</button>

                </article>
            </div>
        )
    }
}

export default MooseComp;