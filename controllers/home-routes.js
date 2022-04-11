const router = require("express").Router();
const axios = require("axios");
const { User, Coins } = require("../models");

// coin JSON data
const config = {
  method: 'get',
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?cryptocurrency_type=all&aux=cmc_rank&limit=100',
  headers: { 
    'X-CMC_PRO_API_KEY': 'd3bcf3f1-342e-490a-86e2-484d000fc31b'
  }
}

router.get("/",async (req, res) => {
    const coinFeed = await axios(config)
    console.log(req.session.user_id)
    res.render("main", { layout: "index", coin: coinFeed.data.data, loggedIn: req.session.loggedIn });
});

router.get("/login", (req, res) => {
  res.render("login", { layout: "index", loggedIn: req.session.loggedIn });
});

router.get("/myCrypto",async (req, res) => {
    const coinFeed = await axios(config);
    
    Coins.findAll({
        where: {
            user_id: req.session.user_id
        },
        
    }).then(CoinData => {
        //res.json(CoinData)
        res.setHeader('Content-Type', 'application/json');
        const myCoins = CoinData //res.json(CoinData)
        console.log(myCoins)
        res.render("myCrypto", { layout: "index", coin: coinFeed.data.data, loggedIn: req.session.loggedIn, mCoin: myCoins });
    })         
});

router.get("/coinConverter", (req, res) => {
  res.render("coinConverter", { layout: "index", loggedIn: req.session.loggedIn });
});

module.exports = router;
