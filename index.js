const express = require('express');
const app = express();
const envelopes = require('./routes/envelopes.routes')
const cors = require('cors')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: '*' }))

app.use('/api/envelopes', envelopes)

const PORT = process.env_PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))