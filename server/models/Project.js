const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  techStack: [String],
  githubLink: String,
  demoLink: String,
  imageUrl: String
});

module.exports = mongoose.model('Project', ProjectSchema);

