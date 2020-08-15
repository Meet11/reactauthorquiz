import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import './App.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>
      <p>Select the book written by author to play</p>
    </div>
  </div>);
}

function Turn({author, books, highlight, onAnswerSelected}) {

  function highlightToBgColor(highlight) {
    const mapping = {
      'none' : '',
      'correct' : 'green',
      'wrong' : 'red'
    };
    return mapping[highlight];
  }

  return (
  <div className="row turn" style={{backgroundColor:highlightToBgColor(highlight)}}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="Author"/>
    </div>
    <div className="row col-6">
    <ul key={author} style={{listStyleType:"none"}}>
      {books.map((title) => <li key={title}><Book title={title} key={title} onClick={onAnswerSelected} ></Book></li>)}
    </ul>
    </div>
  </div>
  );
}

function Book({title, onClick}) {
  return (
    <div className="answer" onClick={() => {onClick(title);}}>
      <h4>{title}</h4>
    </div>
  )
}

function Continue({show, onContinue}) {
  return (<div className="row continue">
    {
      show
      ? <div className="col-11">
        <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
      </div>: null
    }
  </div>);
}

function Footer() {
  return (<div id="footer" className="row">
    <div className="col-12">
      <p className="text-muted credit">
        All images are from This website
      </p>
    </div>
  </div>)
}

function AuthorQuiz({turnData, highlight, onAnswerSelected, onContinue}){
  
    return (
      <div className="container-fluid">
        <Hero/>
        <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
        <Continue show={highlight === 'correct'} onContinue={onContinue} />
        <p><Link to="/add">Add an Author</Link></p>
        <Footer/>
      </div>
    );
  }


export default AuthorQuiz;
