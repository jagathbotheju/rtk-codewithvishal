import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktail } from "../redux/features/cocktailSlice";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Typography, Card, CardMedia, CardContent } from "@mui/material";
import Image from "mui-image";
import NoImage from "../images/no-image.png";

const SingleCocktail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [modifiedCocktail, setModifiedCocktail] = useState({});
  const { loading, cocktail } = useSelector((state) => state.app);
  const { name, image, category, info, glass, instructions, ingredients } =
    modifiedCocktail;

  useEffect(() => {
    dispatch(fetchSingleCocktail(id));
  }, [id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
      };
      setModifiedCocktail(newCocktail);
    }
  }, [id, cocktail]);

  if (!modifiedCocktail) {
    return (
      <Stack mt={10} mx="auto" width="50%">
        <Typography variant="h4">No Cocktail Found...</Typography>
      </Stack>
    );
  }

  return (
    <>
      <Stack m={5} mx="auto" width="60%">
        <Card>
          <Stack direction="row">
            <CardMedia>
              <Image
                src={image === "indefined" ? NoImage : image}
                fit="cover"
                height="60vh"
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {name}
              </Typography>
              <Typography variant="body2">{info}</Typography>
              <Typography variant="body2">{glass}</Typography>
              {/* <Typography variant="body2">{instructions}</Typography>
              {ingredients.map((item, index) => (
                <Typography cariant="body2" key={index}>
                  {item}
                </Typography>
              ))} */}
            </CardContent>
          </Stack>
        </Card>
      </Stack>
    </>
  );
};

export default SingleCocktail;
