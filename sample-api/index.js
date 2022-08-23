const express = require('express')
const bodyParser = require('body-parser');

const app = express();
const port = 6060;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.post('/login', (_, res) => {
  res.json({
    success: true,
    message: 'User logged in successfully',
  });
});

app.post('/cart/item', (_, res) => {


  res.json({
    success: true,
    message: 'Item added to cart',
  });
});

app.post('/checkout', (req, res) => {

  res.json({
    success: true,
    message: 'Order created',
  });
});

app.listen(port, () => {
  console.log(`Hello world app listening on port ${port}!`);
});

