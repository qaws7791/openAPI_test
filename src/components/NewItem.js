import React from 'react'
import { Link } from 'react-router-dom';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Card from '@mui/material/Card';

import './NewItem.css';



export const NewItem = ({ article }) => {

    const { 
        mt20id,
        prfnm,
        prfpdfrom,
        prfpdto,
        fcltynm,
        poster,
        genrenm,
        prfstate,
        openrun    
    } = article;
    return (
        // <div>
        //     <div className="poster">

        //             <img src={poster} alt="poster"></img>

        //     </div>
        //     <div className="title">
        //         <Button variant="contained" color="primary">
        //             보러가기
        //         </Button>
        //         <h2>공연ID: {mt20id}</h2>
        //         <h2>제목: {prfnm}</h2>
        //         <h4>기간: {prfpdfrom} ~ {prfpdto}</h4>
        //         <h4>장소: {fcltynm}</h4>
        //         <h4>장르: {genrenm}</h4>
        //         <h4>공연상태: {prfstate}</h4>
        //         <h4>오픈런: {openrun}</h4>
        //     </div>


        // </div>
        <Link to={"/about/"+mt20id} className="card">
        <Card >
        <CardActionArea>
          <CardMedia
            
            image={poster}
            title="poster"
          />
          <CardContent>
            <Typography className="name" gutterBottom variant="body1" component="h4">
            {prfnm}
            </Typography>
            <Typography className="period" gutterBottom variant="subtitle1" component="h3">
            {prfpdfrom} ~ {prfpdto}
            </Typography>
            <Typography className="place" gutterBottom variant="subtitle2" component="h4">
            {fcltynm}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button variant="outlined" size="large" color="#ccc">
          <Link to={"/about/"+mt20id}>about</Link>
          </Button>
            
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
      </Card>
      </Link>
    );
}
