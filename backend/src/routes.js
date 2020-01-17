const {Router} = require('express');
const DevController = require('./controllers/DevConstroller');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/',(request, response)=>{
    return response.json({message:'Hello OmniStack'});
});

routes.get('/devs',DevController.index);

routes.get('/search',SearchController.index);

routes.post('/devs',DevController.store);

routes.put('/devs/:id',DevController.update);

routes.delete('/devs/:id',DevController.destroy);


module.exports = routes;