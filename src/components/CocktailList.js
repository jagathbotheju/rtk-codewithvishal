import {
  Backdrop,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
  CardActions,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../redux/features/cocktailSlice";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const CocktailList = () => {
  const dispatch = useDispatch();
  const { cocktails, loading } = useSelector((state) => state.app);
  const [modifiedCocktails, setModifiedCocktails] = useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktails(newCocktails);
    } else {
      setModifiedCocktails([]);
    }
  }, [cocktails]);

  //console.log(loading);

  if (loading) {
    return (
      <Backdrop
        open={open}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          opacity: 0.5,
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (!cocktails) {
    return (
      <Stack mt={10} mx="auto" width="50%">
        <Typography variant="h4">No Cocktail Found...</Typography>
      </Stack>
    );
  }

  return (
    <>
      <Stack mt={2} mx="auto" px={5}>
        <Typography textAlign="center" gutterBottom variant="h4">
          Cocktail List
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {modifiedCocktails.map((item) => {
            return (
              <Grid item key={item.id}>
                <Card sx={{ width: 200 }}>
                  <CardMedia component="img" height="160" image={item.image} />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography variant="body2">{item.info}</Typography>
                    <Typography variant="body2">{item.glass}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      component={Link}
                      to={`cocktail/${item.id}`}
                      variant="contained"
                      size="small"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
};

export default CocktailList;
