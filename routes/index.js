var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
  });
});

/* GET products page. */
router.get("/products", function (req, res, next) {
  axios
    .get("https://dummyjson.com/products")
    .then(function (response) {
      // handle success
      console.log(response.data);
      res.render("products", {
        products: response.data.products,
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

/* GET search products page. */
router.get("/products/search", function (req, res, next) {
  const searchQuery = req.query.q;
  axios
    .get(`https://dummyjson.com/products/search?q=${searchQuery}`)
    .then(function (response) {
      // handle success
      console.log(response.data);
      res.render("search", {
        products: response.data.products,
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

/* GET Single products page. */
router.get("/products/:id", function (req, res, next) {
  const pro = req.params.id;
  axios
    .get(`https://dummyjson.com/products/${pro}`)
    .then(function (response) {
      // handle success
      console.log(response.data);
      res.render("details", {
        products: response.data,
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

module.exports = router;
