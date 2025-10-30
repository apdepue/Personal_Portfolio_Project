import React from "react";
import WordCard from "./WordCard";
import './CardsContainer.css';

export default class CardsContainer extends React.Component {
  render() {
    const words = this.props.words;
    const deleteWord = this.props.deleteWord;

    const cardList = words.map( word =>
        <WordCard 
            front = {word.front} 
            back = {word.back} 
            key = {word.front}
            deleteWord = {deleteWord}/>
        );

    return (
        <section className="cards-container">
            {cardList}
        </section>
    )
  }
}