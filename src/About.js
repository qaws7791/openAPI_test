import React from 'react';
import ItemDetail from '../components/ItemDetail';

const About = ({match}) => {


    return (
        <div>
            <h2>About {match.params.name} </h2>
            <ItemDetail url={"http://www.kopis.or.kr/openApi/restful/pblprfr/"+match.params.name+"?service=f266ccd34e7f4c8eb26a2f848d155f0b"} />
        </div>
    );
};

export default About;