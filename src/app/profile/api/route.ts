import { NextRequest } from "next/server"
import { headers } from "next/headers"
import { cookies } from "next/headers"
export async function GET(request: NextRequest) {
//we use the haders web api to extract the headers from the request
// const requestHeaders = new Headers(request.headers)
//we use the get method on request header and log the authorization header to the console
// console.log(requestHeaders.get("authorization"))


//we invoke the header function and store the result in a requestHeaders constant

const headerList = await headers();
console.log(headerList.get("Authorization"))
    
const theme = request.cookies.get("theme");
console.log(theme);

const cookieStore = await cookies();
cookieStore.set("ResultPerPage", "20")
console.log(cookieStore.has("ResultPerPage"));

     return new Response("<h1>Profile API Endpoint</h1>", {
    headers: {
      "Content-Type": "text/html",
      "set-cookie": "theme=dark",
    },
    
  });
}