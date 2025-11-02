import React, { Component } from "react";
import "./TaskCard.css";

export default class TaskCard extends Component {
    state = {
        isFront: true
    };

    handleFlip = () => {
        this.setState(prev => ({ isFront: !prev.isFront }));
    };

    handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = this.props.id ?? this.props.front;
        if (typeof this.props.deleteTask === 'function') {
            this.props.deleteTask(id);
        }
    };

    render() {
        const { front, detail } = this.props;

        const cardContent = this.state.isFront ? (
            <div className="card-front">
                <h3 className="task-title">{front}</h3>
                {detail ? <p className="task-detail-preview">{detail}</p> : null}
            </div>
        ) : (
            <div className="card-back">
                <p className="task-completed">Complete!</p>
                {front}
                <p>{detail ||
                 "No details provided."}</p>     
            </div>
        );

        return (
            <div className="task-card" onClick={this.handleFlip}>
                <span className="delete-card" onClick={this.handleDelete}>×</span>
                {cardContent}
            </div>
        );
    }
}