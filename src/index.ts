/*const myFunc = (num: number): number => {
    return num * num;
  };
  
  export default myFunc;*/
  
  import express, { query } from 'express';
import { appendFile } from 'fs';
const app = express();
const port =3100;
app.listen(port, ()=>{
    console.log(`Server is up and running on http://localhost:${port}`)
});

//request imge
app.get('./src/api/v1/img/encenadaport.jpg', (req, res)=>{
  console.log(req.query.image);
  res.sendStatus(200).send('good');
  //res.sendFile(Image);
  
  //res.sharp.json();
});
//hello Udacity
app.get('/', (req, res)=>{
  //console.log('this is the first image');
  res.send('Hello Udacity');
  //res.sharp.json();
});
export default app;
