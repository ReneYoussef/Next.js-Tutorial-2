



export const dynamic = "force-static";//this ensure that the response is cached and served instantly to all users
export const revalidate = 10; //this will update the cache every 10 seconds


//build the app
// after building the app, you can test this route handler by visiting /time in the broweser
//even if you refresh the page, the response will be the same because it is cached
//only when you restart the server, the response will change

////////////////////////////////////////


// if we want to update our data without rebuilding the entier app, we can use the `revalidate` option using incremental static regeneration (ISR)


//cashing only works with get methods, so we can only use GET method here

export async function GET() {
return Response.json({time: new Date().toLocaleTimeString()});
}