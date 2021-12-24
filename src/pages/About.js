import React from 'react';
import ItemDetail from '../components/ItemDetail';

const About = ({match}) => {


    return (
        <div>
            <h2>About {match.params.name} </h2>
            <ItemDetail url={"https://www.kopis.or.kr/openApi/restful/pblprfr/"+match.params.name+"?service=06a11aff5c1a4a0fb3b8856fe545e031"} />
        </div>
    );
};

export default About;