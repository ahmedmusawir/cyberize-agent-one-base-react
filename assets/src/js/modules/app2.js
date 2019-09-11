import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MooseComp from './moose-comp';

class App2 extends React.Component { 
    handleClick(e) { 
        console.log('Running React App 1'); 
        alert('Running React App with Gulp');
    }

    render() {
        return (
            <div className="app-content container">
                <h1 className="jumbotron">React App 1 Works!</h1>
                <article>
                    <h3>Bootstrap 4 Added - Updated 21 Oct 2018</h3>
                    <h3>Gulp React - Updated 10 Sep 2019</h3>
                    <h3>Gulp 4.0 Upgrade Complete</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate eos fugiat
                        vel necessitatibus dolores molestiae quas, praesentium similique, est minima
                        consequatur sit aspernatur nostrum nulla et maxime maiores distinctio possimus!
                    </p>
                    <button className="btn btn-danger" onClick={this.handleClick}>Click Works!</button>

                </article>

                <hr/>

                <MooseComp />
            </div>
        )
    }
}

export default App2;