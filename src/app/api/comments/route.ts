
import { comments } from "./data"


// GET Request handler to fetch all comments
export async function GET() {
    return Response.json(comments)
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



