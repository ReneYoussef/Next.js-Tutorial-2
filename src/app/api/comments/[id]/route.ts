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


//UPDATE Request handler to update a comment by ID


export async function PATCH(
    request: Request,
     { params }: { params:  Promise<{id: string}> }
){
    //first we distructure the id from the params
const {id} = await params;
//get the json body from the request
const body = await request.json();
// from body we distructure the title
const {title} = body;

//find the comment we want to update
const index = comments.findIndex((comment) => comment.id === parseInt(id));
// if found we update the title
comments[index].title = title;

return Response.json(comments[index])

}


// DELETE Request handler to delete a comment by ID

export async function DELETE(
     request: Request,
     { params }: { params:  Promise<{id: string}> }
){
     //first we distructure the id from the params
    const {id} = await params;
    //find the index of the comment to delete
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    //before deteting we store the comment in a variable to return it later
    const DeletedComment = comments[index];
    //remove the comment from the comments array
    comments.splice(index, 1);
    //return the deleted comment as a JSON response
    return Response.json(DeletedComment)
    
}
