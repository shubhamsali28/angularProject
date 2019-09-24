const express = require("express");

const app = express();

var cors = require('cors');

// for using different url from different url
app.use(cors({
  origin: 'http://localhost:4200'
}));

//middleware
const middlewareFn = (req, res, next) => {
  console.log("Middleware is running");
  next();
}
// Remember to call app.use
app.use(middlewareFn);

app.get("/getProducts", (req, res) => {
  res.send([
    {
      productImage : 'https://picsum.photos/id/237/200/300',
      productName : 'Bread',
      productCode : '3dfdf',
      releaseDate : '6 Sept',
      productPrice : 2000,
      productRating : 4.9
    },
    {
      productImage : 'https://picsum.photos/200/300?grayscale',
      productName : 'Butter',
      productCode : 'sdf25',
      releaseDate : '10 Jan',
      productPrice : 244,
      productRating : 2.5
    },
    {
      productImage : 'https://picsum.photos/200/300/?blur',
      productName : 'Chilly',
      productCode : 'rfw3d',
      releaseDate : '6 Sept',
      productPrice : 554,
      productRating : 3.6
    }
  ]);
});

app.listen(3000, function() {
console.log('This is my first nodejs');
});
