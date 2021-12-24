import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

var parseString = require('xml2js').parseString;


const ItemDetail = ({url}) => {
    const [detailItem, setDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = React.useState(false);



    useEffect(() => {
        const  fetchData = async () => {
            setLoading(true);
            try {
                const responce = await axios.get(
                    url,
                );
                parseString(responce.data, function (err, result) {
                    console.dir(result);
                    setDetail(result);
                  });

            } catch (e) {
                console.log(e);
            }
            setLoading(false);
            setOpen(true);
        };
        fetchData();
    },[url]);

    if(loading) {
        return (<div>
                    <CircularProgress />
                </div>);
    }

    if(!detailItem) {
        return null;
    }
    var {
        mt20id,
        mt10id,
        prfnm,
        prfpdfrom,
        prfpdto,
        fcltynm,
        prfcast,
        prfcrew,
        prfruntime,
        prfage,
        entrpsnm,
        pcseguidance,
        poster,
        sty,
        genrenm,
        prfstate,
        openrun,
        styurls,
        dtguidance
    } = detailItem.dbs.db[0];

    return (
        <div>
            <p>공연ID: {mt20id}</p>
            <p>공연시설ID: {mt10id}</p>
            <p>공연명: {prfnm}</p>
            <p>공연시작일: {prfpdfrom}</p>
            <p>공연종료일: {prfpdto}</p>
            <p>공연시설명: {fcltynm}</p>
            <p>공연출연진: {prfcast}</p>
            <p>공연런타임: {prfruntime}</p>
            <p>공연관람연령: {prfage}</p>
            <p>제작사: {entrpsnm}</p>
            <p>티켓가격: {pcseguidance}</p>
            <p>poster<img src={poster}></img></p>
            <p>줄거리: {sty}</p>
            <p>장르: {genrenm}</p>
            <p>공연상태: {prfstate}</p>
            <p>오픈런: {openrun}</p>
            <p>소개이미지목록
            {styurls[0].styurl.map(styurl => {
                return <p><img src={styurl}/></p>
            })}
            </p>
            <p>공연시간: {dtguidance}</p>
        </div>
    )
}

export default ItemDetail;