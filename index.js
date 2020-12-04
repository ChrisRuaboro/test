require('dotenv').config()

const axios = require("axios");

const GIPHy_API_BASE_URL = `http://api.giphy.com/v1/gifs`;

const SEARCH_KEYWORD = "kanye";

axios
.get(`${GIPHy_API_BASE_URL}/search?api_key=${process.env.GIPHY_API_KEY}&q=${SEARCH_KEYWORD}`)
.then((res) => {
    const gifs = res.data.data;
    gifs.map((gif) => {
        console.log(gif.images.downsized.url);
    })
})