const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//producttion 会从 process 里面读
//开发环境下是 5000
const PORT = process.env.PORT || 5000;

//定义 routes
app.use('/api/users', require('./routers/users'));
app.use('/api/auth', require('./routers/auth'));
app.use('/api/contacts', require('./routers/contacts'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
