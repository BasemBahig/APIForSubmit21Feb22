import express from 'express';
const routes = express.Router();

/*routes.get('/api', routes);*/

//hello Udacity
routes.get('/', (req, res)=>{
    //console.log('this is the first image');
    res.send('Hello Udacity This is main API');
    //res.sharp.json();.
  });
  
  export default routes;