import React from "react";
import Header from "../../common/header/Header";
import { Button, Typography } from "@material-ui/core";
import "./Details.css"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import releasedMovie from "../releasedMovie";
import YouTube from 'react-youtube';
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom"

const Details = (props) => {

    
    const location = useLocation();
    const propsData = location.state;
    const history = useHistory();

    let items = releasedMovie.find(tile => tile.id == propsData);

    function returnBack(){
        history.push("/");
    }

    return (
        <div>
            <Header value="allow book" />
            <div className="back">
                <Typography variant="button">
                    <Button className="button-home" onClick={returnBack}> Back to Home </Button>
                </Typography>
            </div>
            <div className="flex-container">
                <div className="movie-picture">
                    <GridList cellHeight={400}>
                        <GridListTile key={items.id}>
                            <img src={items.img} alt={items.title} width="100%" />
                        </GridListTile>
                    </GridList>
                </div>
                <div className="movie-content">
                    <Typography variant="h2">
                        {items.title}
                    </Typography>
                    <br />
                    <Typography>
                        <span className="make-bold">Genre:</span> {items.genre}
                    </Typography>
                    <Typography>
                        <span className="make-bold">Duration:</span> {items.duration}
                    </Typography>
                    <Typography>
                        <span className="make-bold">Release Date:</span> {items.released}
                    </Typography>
                    <Typography>
                        <span className="make-bold">Rating:</span> {items.rating} 
                    </Typography>
                    <br />
                    <Typography>
                        <span className="make-bold">Plot:</span>
                        <Link to={{ pathname: items.wiki }} target="_blank" >
                            (WikiLink)
                        </Link>
                        &nbsp; {items.plot}
                    </Typography>
                    <Typography>
                        <span className="make-bold">Trailer:</span>
                    </Typography>
                    <br />
                    <YouTube videoId={items.trailer} />
                </div>
                <div className="movie-rating">
                    <Typography>
                        <span className="make-bold">Rate this movie:</span>
                        <span>Yet to Implemented</span>
                    </Typography>
                    <br/>
                    <Typography>
                        <span className="make-bold">Artist:</span>
                        <GridList cellHeight={250} className="gridList" >
            {items.artist.map(tile => (
              <GridListTile key={tile.artist_img}>  
               <img src={tile.artist_img} alt={tile.artist_name} />
                <GridListTileBar
                  title={tile.artist_name}
                />
              </GridListTile>
            ))}
          </GridList>
                    </Typography>
                </div>
            </div>
        </div>
    )
};


export default Details;
