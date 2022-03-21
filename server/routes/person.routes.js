const PersonController = require('../controllers/person.controller');

module.exports = function(app){
   app.get('/api', PersonController.index);
   app.post('/api/people', PersonController.createPerson);
   app.get('/api/people', PersonController.getAllPeople);
   app.get('/api/person/:id', PersonController.findOnePerson);
   app.put('/api/person/:id', PersonController.updatePerson);
   app.delete('/api/person/delete/:id', PersonController.deletePerson);
}