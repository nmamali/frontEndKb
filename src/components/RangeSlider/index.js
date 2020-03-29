import React, {Component} from 'react';
import './rangeslider.css'

class RangeSlider extends Component {
    constructor() {
        super()
        this.state = {value: 0}
        this.handleChange = this.handleChange.bind(this)
      }
      
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
        render() {
            return (
            <div>
                <label>
                <input 
                    id="typeinp" 
                    type="range" 
                    min="0" max="10" 
                    value={this.state.value} 
                    onChange={this.handleChange}
                    step="1"/>
                {this.state.value}
                </label>
            </div>
            );
        }
}

export default RangeSlider;