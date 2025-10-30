import React, {Component} from "react";
import "./WordCard.css";

export default class WordCard extends Component {
    componentDidMount() {
        console.log(`WordCard for ${this.props.front} mounted.`);
    }
    componentDidUpdate() {
        console.log(`WordCard for ${this.props.front} updated.`);
    }
    componentWillUnmount() {
        console.log(`WordCard for ${this.props.front} will unmount.`);
    }
    state = {
        isFront: true
    };

    handleFlip = () => {
        this.state({isFront: !this.state.isFront});
    };

    handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.deleteWord(this.props.front);
    } 

    render() {
        const cardContent = 
            this.state.isFront ?
            <div className="card-front">English: {this.props.front}</div> :
            <div className="card-back">German: {this.props.back}</div>;
        return (
            <div className="word-card" onClick={this.handleFlip}>
                <span className="delete-card" onClick={this.handleDelete}>×</span>
                {cardContent}
            </div>
        );
    }
}