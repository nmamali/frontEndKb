import React, {Component} from 'react';
import RangeSlider from '../RangeSlider';
import './testcard.css'
import data from './data';

class TestCard extends Component{
    constructor() {
        super()
        this.state = {value: 0}
        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
      }

      handleNext(event) {
        if (this.state.value !== 3)
        this.setState({value: this.state.value + 1});
      }
      handlePrev(event) {
        if (this.state.value !== 0)
        this.setState({value: this.state.value - 1});
      }
      
    render(){
       
        const other = data.filter(item => item.id === this.state.value);
        return (
            <div className="cardss">
            <div className="ui centered cards">
            <div className="card">
            <div className="image">
                <img src= {other[0].image} alt="" />
            </div>
                <div className="content">
                <div className="center aligned header">
                {other[0].symptom}
                </div>
                <div className="description">
                <RangeSlider />
                </div>
                </div>
                <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic red button"
                     onClick={this.handlePrev}
                    >
                        Prev
                    </div>
                    <div className="ui basic green button"
                    onClick={this.handleNext}
                    >
                        Next
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default TestCard;