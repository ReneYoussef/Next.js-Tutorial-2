import { comments } from "../data";
//dynamic route handler 

//get a comment by ID    //request object    //context object containing  route parameters
// we are only intrested in the context so prefix the request with an underscore
export async function GET(
    _request: Request,
     { params }: { params:  Promise<{id: string}> }) {
    //access the id route parameter
const {id} = await params
//using this id we search for the comment in the comments array
const comment = comments.find((comment)=>comment.id === parseInt(id));
//if comment found we send it back to the client as a JSON response
return Response.json(comment)


}