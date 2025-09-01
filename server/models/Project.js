const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  technologies: [String],
  githubLink: String,
  image: String,
  category: {type: String, enum:['software', 'hardware'], required: true}
});

module.exports = mongoose.model('Project', ProjectSchema);

