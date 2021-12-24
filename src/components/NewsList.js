import React, { useState, useEffect } from 'react';
import { NewItem } from './NewItem';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import './NewsList.css';


var parseString = require('xml2js').parseString;
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export const NewsList = ({url}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = React.useState(false);
    
    const handleClose = (event, reason) => { //알림함수
        if (reason === 'clickaway') { 
        return;
        }
        if(reason === 'timeout'){
            setOpen(false);
        }

            setOpen(false);
    };



    useEffect(() => {
        const  fetchData = async () => {
            setLoading(true);
            try {
                const responce = await axios.get(
                    url,
                );
                parseString(responce.data, function (err, result) {
                    console.dir(result);
                    setArticles(result);
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

    if(!articles) {
        return null;
    }

    return (
        <div className="newsList">
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    검색이 완료되었습니다.
                </Alert>
            </Snackbar>
            {articles.dbs.db.map(article => {
                return <NewItem key={article.mt20id} article={article}/>
            })}
        </div>
    )
}
