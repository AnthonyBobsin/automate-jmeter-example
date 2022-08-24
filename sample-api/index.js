const express = require('express')
const bodyParser = require('body-parser');

const app = express();
const port = 6060;

const withRandomSleep = (min, max, cb) => {
  const sleep = Math.floor(Math.random() * (max - min + 1) + min);
  setTimeout(cb, sleep);
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (_, res) => {
  withRandomSleep(500, 1500, () => {
    res.send('Hello World!');
  });
});

app.post('/login', (_, res) => {
  withRandomSleep(1000, 3200, () => {
    res.json({
      success: true,
      message: 'User logged in successfully',
    });
  });
});

app.post('/search', (_, res) => {
  withRandomSleep(750, 2500, () => {
    res.json({
      success: true,
      message: 'Search completed successfully',
    });
  });
});

app.post('/cart/item', (_, res) => {
  withRandomSleep(750, 1750, () => {
    res.json({
      success: true,
      message: 'Item added to cart',
    });
  });
});

app.post('/checkout', (req, res) => {
  withRandomSleep(1500, 4500, () => {
    res.json({
      success: true,
      message: 'Order created',
    });
  });
});

app.listen(port, () => {
  console.log(`Hello world app listening on port ${port}!`);
});

