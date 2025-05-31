import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   // Example check (replace with actual auth logic if needed)
//   // return NextResponse.redirect(new URL("/", request.url));

//   //second approach using conditional statement
//   if (request.nextUrl.pathname === "/profile") {
//     // Redirect to the home page if the user tries to access the profile page
//     // return NextResponse.redirect(new URL("hello", request.nextUrl));
//     // this shows how we can use conditional statements to control middleware responses base on the request path
//      return NextResponse.rewrite(new URL("hello", request.nextUrl));
//     //beond redirect middleware also suipports URL rewrites a feature prefect of handling legacy urls or improve SEO 
//     //it keeps the original URL in the browser's address bar while serving content from a different URL

// // export const config = {
// //   matcher: "/profile", // ✅ fixed path syntax
// }
// }


////////////////////////////////////////////////////////////////////////////////////////

//exploring the use of headers and cookies in middleware


//modifie the middleware to handle user preferences for themes and add a custom header for all responses

export function middleware(request: NextRequest) {

  // getting the response object that we will eventually return from the function
  const response = NextResponse.next();
  // Check for a theme cookie
  const themePrefrence = request.cookies.get("theme");
  if(!themePrefrence) {
    // If no theme cookie is set, set a default theme
    response.cookies.set("theme", "light")

  }
  response.headers.set("Custom-Header", "Custom-Value");
  return response;





}