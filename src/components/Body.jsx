import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { RestaurantData } from "./mocks/data";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3d4152;
  &:focus,
  &:hover {
    text-decoration: none;
    color: orange;
  }
`;

// filter Data according to Search Text
function filterData(searchText, restaurantList) {
  const filterData = restaurantList.filter((restaurant) => {
    return restaurant?.data?.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return filterData;
}

const Body = () => {
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  // API CALL OF SWIGGY
  async function getRestaurants() {
    try {
      const response = await fetch(RESTURANT_API_URL);
      const json = await response.json();
      const cardsData = json?.data?.cards[2]?.data?.data?.cards || [];
      setFilterRestaurantList(cardsData);
      setAllRestaurantList(cardsData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Box
        sx={{ marginTop: "90px", display: "flex", justifyContent: "center" }}
      >
        <TextField
          data-testid="search-input"
          fullWidth
          variant="outlined"
          placeholder="Search for restaurant"
          value={searchText}
          sx={{
            width: "50%",
            "& .MuiInputBase-root-MuiOutlinedInput-root": {
              width: "80%",
              paddingRight: 0,
            },
          }}
          onChange={(e) => {
            setSearchText(e.target.value);
            if (searchText.length <= 1) {
              getRestaurants();
            }
            const data = filterData(e.target.value, allRestaurantList);
            setFilterRestaurantList(data);
          }}
          InputProps={{
            sx: {
              "& .MuiOutlinedInput-input": {
                outline: "none",
                width: "80%",
                paddingRight: 0,
              },
              "& .MuiOutlinedInput-input:focus": {
                outline: "none",
              },
            },
            endAdornment: (
              <Box sx={{ marginLeft: 5 }}>
                <Button
                  type="submit"
                  data-testid="search-btn"
                  onClick={() => {
                    const data = filterData(searchText, allRestaurantList);
                    setFilterRestaurantList(data);
                  }}
                  sx={{
                    background: "orange",
                    color: "#3d4152",
                    "&:hover ": { background: "orange" },
                  }}
                >
                  Search
                </Button>
              </Box>
            ),
          }}
        />
      </Box>
      {allRestaurantList.length > 0 ? (
        <Box className="restaurantList" data-testid="resList">
          {RestaurantData.length > 0 ? (
            RestaurantData.data.map((restaurant) => (
              <StyledLink key={restaurant?.id} to={`/${restaurant?.id}`}>
                <ResturantCard {...restaurant} />
              </StyledLink>
            ))
          ) : (
            <Box
              sx={{
                marginTop: "200px",
                background: "orange",
                padding: "0 150px",
                height: "160px",
                borderRadius: "15px",
              }}
            >
              <Typography
                sx={{
                  color: "#fdfdfd",
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginTop: "50px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Restaurant you are trying to search is not available!
              </Typography>
            </Box>
          )}
        </Box>
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default Body;
