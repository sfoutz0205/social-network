const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3005

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.status('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost: ${PORT}`));