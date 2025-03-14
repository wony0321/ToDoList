const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.html'));
});

app.get('/todo', (req, res) => {
  res.sendFile(path.join(__dirname, 'toDoList.html'));
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
