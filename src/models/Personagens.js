const mongoose = require('mongoose');

const PersonagensSchema = 
new mongoose.Schema ({
    personagem:{type: String, required: true}
    
});

const Personagens = mongoose.model('personagens', PersonagensSchema);

module.exports = Personagens;