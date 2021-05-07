import React from "react";
import './Event.css';

class Event extends React.Component {

    render () {
        return (
            <div class = "box">
                    <p class = "date">{this.props.date}</p>
                    <p class = "title">{this.props.title}</p>
                    <p class = "event-description">{this.props.desc}</p> 
            </div>
        );
    }

	
}

export default Event;