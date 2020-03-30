import React from 'react';
import TestCard from './TestCard';
import Header from './Header';
import Footer from './Footer';
import Graphs from './Graphs';



class App extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                {/* <TestCard />  */}
                <Graphs/>
                <Footer/>
            </div>
        )
    }
}

export default App;