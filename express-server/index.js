require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./src/db/database.js');
const port = process.env.PORT || 3000;
const tokenAuthentication = require('./src/middleware/tokenAuthentication.js');
const registrationRoutes = require('./src/routes/public/registrationRoutes.js');
const projectRoutes = require('./src/routes/private/projectRoutes.js');

app.use(cors());
app.use(express.json());
db.authenticate().then(() => console.log('Database connected...')).catch(err => console.log('Unable to connect to database' + err));

app.use('/api', registrationRoutes);
app.use('/api', tokenAuthentication, projectRoutes);
db.sync({ force: false}).then(() => app.listen(port, () => console.log(`Server running on port ${port}`))).catch(err => console.log('Error syncing database' + err));