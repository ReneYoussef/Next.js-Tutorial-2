
import { comments } from "./data"
import { NextRequest } from "next/server";

// GET Request handler to fetch all comments
// export async function GET() {
//     return Response.json(comments)
// }




// URL Query parameters handler
// This handler allows us to filter comments based on a query parameter

export async function GET(request: NextRequest) {//this nextRequest object provied convinient methods for managing query parameters with ease
    //we grab all the query parameters from the request
   const searchParams = request.nextUrl.searchParams
    //we can use the get method to get a specific query parameter
    const query = searchParams.get("query");
    // if there is a query parameter we filter the comments based on the search term if no respond with original comments
    const filteredComments = query? comments.filter(comment => comment.title.includes(query)) : comments;


    return Response.json(filteredComments)
}


//POST Request handler to add a new comment
export async function POST(request: Request) {

   const comment = await request.json();
   const newComment = {
         id: comments.length + 1,
         title: comment.title,
   }
   comments.push(newComment);

    return new Response(JSON.stringify(newComment),{
        headers: {
            "Content-Type": "application/json",
    },status: 201}
);
}



