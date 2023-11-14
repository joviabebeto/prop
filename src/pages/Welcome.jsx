import React from 'react';
import Nav from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Card from "../components/Card"
import goodlove from "../assets/goodLove.jpeg";
import goodlife from "../assets/goodLife.jpeg";
import swimming from "../assets/swimming.jpeg";
import code from "../assets/code.jpeg"
const Welcome = () => {
    return (
        <>
            <>
                <Nav />
                <Home />
                <div className="card">
                    <Card photo={goodlife} name="goodlife" price={200} />
                    <Card photo={goodlove} name="goodlove" price={100} />
                    <Card photo={swimming} name="swimming" price={50} />
                    <Card photo={code} name="code" price={500} />
                </div>

                <Footer />
            </>
        
        </>
    );
}
export default Welcome