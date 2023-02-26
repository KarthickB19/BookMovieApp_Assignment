import React from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import movieData from "../movieData.js";



const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  })

const Home = () => {
    return(
        <div>
            <Header/>
            <div className="headerHome">
            <p className="textPara">Upcoming Movies</p>
            </div>
            <div>
            <GridList cols={6}>
            {movieData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.author}
              actionIcon={
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      </div>
      <div className="split left">
        
      </div>
      <div className="split right">

      </div>
        </div>
    )
       
}

export default Home;

