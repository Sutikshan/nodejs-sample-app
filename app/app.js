const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send("Hey Ho, let's go - Hello World!");
});
app.listen(port, () => console.log(`example app listening to port ${port}`));


