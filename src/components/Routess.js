import React from 'react'
import { Route,Routes } from 'react-router-dom';
import  { Search, About,Home }from '../pages';


 const Routess = () => {
    return (
            <div>
                <Routes>
                    
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/search" element={<Search />}/>
                    <Route path="/about/:name" element={<About/>}/>
                </Routes>
                

                
            </div>
    )
}

export default Routess;