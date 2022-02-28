import express from 'express';

import images from './api/images'


const routes = express.Router();
routes.use('/images', images);

/*routes.get('/api', routes);*/

//hello Udacity
routes.get('/', (req, res)=>{
    //console.log('this is the first image');
    res.send('Hello Udacity This is main API');
    //res.sharp.json();.
  });
  
  export default routes;