import React, {Component} from 'react';
import RangeSlider from '../RangeSlider';
import './testcard.css'
import data from './data';

class TestCard extends Component{
    constructor() {
        super()
        this.state = {value: 0,
            content: [
                {
                    image:( <div className="image">
                                <img src= {data[0].image} alt="" />
                             </div>), 
                    sym: data[0].symptom
                },
                {
                    image:( <div className="image">
                                <img src= {data[1].image} alt="" />
                             </div>), 
                    sym: data[1].symptom
                },
                {
                    image:( <div className="image">
                                <img src= {data[2].image} alt="" />
                             </div>), 
                    sym: data[2].symptom
                },
                {
                    image:( <div className="image">
                                <img src= {data[3].image} alt="" />
                             </div>), 
                    sym: data[3].symptom
                },
                {
                    image:( <div className="image">
                                <img src= {data[4].image} alt="" />
                             </div>), 
                    sym: data[4].symptom
                },
            ] 
        };
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
            <div className="cardss">
                <div className="ui centered cards">
                     <div className="card">
                         {this.state.content[this.state.value].image}
                        <div className="content">
                            <div className="center aligned header">
                                {this.state.content[this.state.value].sym}
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