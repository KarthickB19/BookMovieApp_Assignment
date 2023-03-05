import React from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import movieData from "../movieData.js";
import releasedMovie from "../releasedMovie";
import Card from '@material-ui/core/Card';
import { CardContent, CardHeader, FormControl, TextField, Button } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";


const Home = () => {

  const [genre, setGenre] = React.useState('');

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  //Add theme



  return (
    <div>
      <Header />
      <div className="headerHome">
        <span className="textPara">Upcoming Movies</span>
      </div>
      <div class="ScrollStyle">
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
          <GridList cellHeight={350} className="gridList" cols={3}>
            {releasedMovie.map(tile => (
              <GridListTile key={tile.img}>
                <Link to={{
                  pathname: `/movie/${tile.id}`,
                  state: `${tile.id}`
                }}>
                  <img src={tile.img} alt={tile.title} className="image" />
                </Link>
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>Release: {tile.released}</span>}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <div className="movie-filter">
          <Card square elevation={20}>
            <CardContent>
              <CardHeader title="FIND MOVIES BY (Not implemented)" />
              <div>
                <FormControl className="formControl">
                  <TextField label="Movie Name" />
                </FormControl>
                <FormControl className="formControl">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={genre}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>
                      <Checkbox
                        value=""
                      />
                      Horror
                    </MenuItem>
                    <MenuItem value={10}>
                      <Checkbox
                        value=""
                      />
                      Drama
                    </MenuItem>
                    <MenuItem value={10}>
                      <Checkbox
                        value=""
                      />
                      Romance
                    </MenuItem>
                    <MenuItem value={10}>
                      <Checkbox
                        value=""
                      />
                      Thriller
                    </MenuItem>
                  </Select> 
                </FormControl>
                <FormControl className="formControl">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="genre"
                    label="Artist"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}><Checkbox
                        value=""
                      />Vijay</MenuItem>
                    <MenuItem value={20}><Checkbox
                        value=""
                      />Ajith</MenuItem>
                    <MenuItem value={30}><Checkbox
                        value=""
                      />Rajini</MenuItem>
                    <MenuItem value={30}><Checkbox
                        value=""
                      />Dhanush</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className="formControl">
                  <TextField type="date" />
                </FormControl>
                <FormControl className="formControl">
                  <TextField type="date" />
                </FormControl>
                <br />
                <br />
                <Button variant="contained" color="primary" className="float-middle">APPLY</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

}

export default Home;

