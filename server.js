const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//定义 routes
app.use('/api/users', require('./routers/users'));
app.use('/api/auth', require('./routers/auth'));
app.use('/api/contacts', require('./routers/contacts'));

//在 producttion 环境的 static assets
if (process.env.NODE_ENV === 'production') {
  //设置 静态 文件夹
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

//producttion 会从 process 里面读
//开发环境下是 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
