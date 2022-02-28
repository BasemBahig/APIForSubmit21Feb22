/*const myFunc = (num: number): number => {
    return num * num;};
  export default myFunc;*/
import express from 'express';
import routes from './routes/index'; 
import fspromises from 'fs/promises';

  //import routes from './index';
  //routes.use('/api',routes);
  const fs = require('fs').promises;

const app = express();
const port =3100;
app.use('/api', routes);


app.listen(port, ()=>{
    console.log(`Server is up and running on http://localhost:${port}`)
});

//Use .open method with W+ also a+ to create resized image if doesn't exist

const writeData = async ()=>{
  const myFile = await fspromises.open(
    'writeFile.txt', 'a+'
  );
};
//request imge
/*app.get('./src/api/v1/img/encenadaport.jpg', (req, res)=>
  console.log(req.query.image);
  res.sendStatus(200).send('good');
  //res.sendFile(Image);
  
  //res.sharp.json();
});*/
//hello Udacity
/*app.get('/', (req, res)=>{
  //console.log('this is the first image');
  res.send('Hello Udacity');
  //res.sharp.json();
});
export default app;*/
