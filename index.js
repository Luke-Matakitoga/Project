const Express = require('express');
const app = Express();

app.get('/', (req, res) => {
    res.send('it works ig');
});

app.listen(3000, () => {
    console.log("Listening");
})