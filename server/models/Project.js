const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  technologies: [String],
  githubLink: String,
  image: String
});

module.exports = mongoose.model('Project', ProjectSchema);

