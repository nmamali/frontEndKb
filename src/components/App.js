import React from 'react';
import TestCard from './TestCard/index';
import Header from './Header';
import Footer from './Footer';
import Graphs from './Graphs';
import Login from './Login';
import Location from './Location/location'
import Signup from './Signup'




class App extends React.Component {
    render(){
        return (
            <div>
                <Login/>
                <Signup />
                <Location />
                <Header/>
                <TestCard />
                <Graphs/>
                <Footer/>
            </div>
        )
    }
}

export default App;
