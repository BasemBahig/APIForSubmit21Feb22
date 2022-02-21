//still need to apply prettier on the folowing console
//console.log("hello word")
import express from 'express';
const app = express();
const port =3100;
app.listen(port, ()=>{
    console.log(`Server is up and running on http://localhost:${port}`)
});
