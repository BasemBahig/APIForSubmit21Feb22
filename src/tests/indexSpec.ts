/*import myFunc from '../index';

it('expect myFunc(5) to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
});
export default myFunc;*/
import supertest from "supertest";
import app from '../index'
//create request object
const request = supertest(app);

//add description 
describe('test first endpoint',()=>{
it('test Get the / endpoint', async () => {
    const response =await request.get('/');
    console.log(response);
    expect(response.status).toBe(200);
})
});