import React from 'react';
import TestCard from './TestCard/index';
import Header from './Header';
import Footer from './Footer';
import Graphs from './Graphs';
import Symptoms from './Symptops';
import './gloabal.css';



class App extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                <Symptoms />
                {/*<TestCard/>*/}
                <Graphs/>
                <Footer/>
            </div>
        )
    }
}

export default App;
