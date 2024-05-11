import { serve } from "bun"; // this imports the serve function from the bun library
import { hostname } from "os";

const server = serve({
  fetch(request) {
    const url = new URL(request.url); // it stores the url request
    if (url.pathname === "/") {
      return new Response("Hello Ice Tea", { status: 200 }); // if path-name contains '/', then return this response
    } else if (url.pathname === "/ice-tea") {
      return new Response("Its very hot out there", { status: 200 });
    } else {
      return new Response("404 not found", { status: 404 }); // if url does not match either of them
    }
  }, // This is the fetch event handler. It's called whenever the server receives a request.
  // It takes a request object as an argument and returns a Response object
  port: 3000,
  hostname: "127.0.0.1",
}); // This function call sets up a server with the provided configuration object

console.log(`Server is listening at http://${server.hostname}:${server.port}`); // logs the server address and port in terminal
