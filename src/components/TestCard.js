import React, {Component} from 'react';
import RangeSlider from './RangeSlider';
import tal from './cough.jpg';

class TestCard extends Component{
    render(){
        return (
            <div className="ui centered cards">
            <div className="card">
            <div className="image">
                <img src= {tal} alt="" />
            </div>
                <div className="content">
                <div className="center aligned header">
                Are you having sorethroat?
                </div>
                <div className="description">
                <RangeSlider />
                </div>
                </div>
                <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic red button">Prev</div>
                    <div className="ui basic green button">Next</div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default TestCard;