const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() );

//GET request
app.get('/tshirt', (req, res) => {
    res.status(200).send({
        name: "Tommy",
        Size: "medium"
    })
}
);

//POST request
app.post('/tshirt/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.status(200).send(
        {
            tshirt: `🙂 with you ${logo} and ID of ${id}`,
        }
    )
}
);

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
);