import React, {Component} from 'react';
import RangeSlider from '../RangeSlider';
import './testcard.css'
import data from './data';
import CardExample from '../Symptops';

class TestCard extends Component{
    constructor() {
        super()
        this.state = {value: 0 };
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        
        
        
      }

      handleNext(event) {
        if (this.state.value !== 4)
        {
            this.setState({value: this.state.value + 1});
        }
      }

      handlePrev(event) {
        if (this.state.value !== 0)
        {
            this.setState({value: this.state.value - 1});
        }  
      }

    render(){
        return (
           <CardExample 
           sym={data[this.state.value].symptom}
           image={data[this.state.value].image} 
           handleNext={this.handleNext}
           handlePrev={this.handlePrev}       
           />
    )
    }
}

export default TestCard;