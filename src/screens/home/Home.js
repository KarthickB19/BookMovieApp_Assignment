import React from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import movieData from "../movieData.js";
import releasedMovie from "../releasedMovie";
import Card from '@material-ui/core/Card';
import { CardContent, CardHeader, FormControl, TextField } from "@material-ui/core";
import Select  from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom"


const Home = () => {

  const [genre, setGenre] = React.useState('');

  const handleChange = (event) => {
    setGenre(event.target.value);
  };


  return (
    <div>
      <Header />
      <div className="headerHome">
        <p className="textPara">Upcoming Movies</p>
      </div>
      <div>
        <GridList cellHeight={250} cols={6}>
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
      <div className="flex-container">
        <div className="movie-release">
          <GridList cellHeight={350} className="gridList" cols={4}>
            {releasedMovie.map(tile => (
              <GridListTile key={tile.img}>
                <Link to={{ pathname: `/movie/${tile.id}`
                }}> 
                <img src={tile.img} alt={tile.title} />
                </Link>
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>Release: {tile.author}</span>}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <div className="movie-filter">
          <Card square elevation={20}>
            <CardContent>
              <CardHeader title="FIND MOVIES BY" />
              <div>
                <FormControl className="formControl">
  
                  <TextField label="Movie Name" />              
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={genre}
                    label="Age"
                    onChange={handleChange}
                  >
                      <MenuItem value="Genres">
                    <em>Genres</em>
                  </MenuItem>
                    <MenuItem value={10}>Horror</MenuItem>
                    <MenuItem value={20}>Adventure</MenuItem>
                    <MenuItem value={30}>Thriller</MenuItem>
                  </Select>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={genre}
                    label="Artist"
                    onChange={handleChange}
                  >
                      <MenuItem value="Genres">
                    <em>Artist</em>
                  </MenuItem>
                    <MenuItem value={10}>Vijay</MenuItem>
                    <MenuItem value={20}>Ajith</MenuItem>
                    <MenuItem value={30}>Rajini</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

}

export default Home;

