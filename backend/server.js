const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/soroban-ide', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



// Routes
app.use('/api/projects', require('./routes/projects'));
app.use('/api/compile', require('./routes/compile'));
app.use('/api/deploy', require('./routes/deploy'));
app.use('/api/templates', require('./routes/templates'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 