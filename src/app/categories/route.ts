

export const dynamic = "force-static";//this ensure that the response is cached and served instantly to all users
export async function GET() {


const categories = [
{  id: "1",
   name: "Electronics",},
{
    id: "2",
    name: "Books",
},
{
    id: "3",
    name: "Clothing",
},
{
    id: "4",
    name: "Home & Kitchen",
},

]
return Response.json(categories)
}

//we cant test this route handler because there is no dynamic data in this response