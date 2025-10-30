import React, {Component} from "react";
import "./TaskCard.css";

export default class TaskCard extends Component {
    componentDidMount() {
        console.log(`TaskCard for ${this.props.front} mounted.`);
    }
    componentDidUpdate() {
        console.log(`TaskCard for ${this.props.front} updated.`);
    }
    componentWillUnmount() {
        console.log(`TaskCard for ${this.props.front} will unmount.`);
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
        this.props.deleteTask(this.props.front);
    } 

    render() {
        const cardContent = 
            this.state.isFront ?
            <div className="card-front">English: {this.props.front}</div> :
            <div className="card-back">German: {this.props.back}</div>;
        return (
            <div className="task-card" onClick={this.handleFlip}>
                <span className="delete-card" onClick={this.handleDelete}>×</span>
                {cardContent}
            </div>
        );
    }
}