import axios from 'axios';

/*
*   Example usage for GET:
*   ApiHelper
*       .get("/users")
*       .then(users => {
*            console.log(users)
*        })
*        .catch(error => {
*            console.log(error);
*        })
*
*   Example usage for POST:
*   ApiHelper
*       .post("/createUser", user)
*       .then(user => {
*            console.log(user)
*        })
*        .catch(error => {
*            console.log(error);
*        })
*/
export default {
    get: (route) => (
        axios({
            method: "get",
            url: protocol + host + port + route
        })
    ),
    post: (route, body) => (
        axios({
            method: "post",
            url: protocol + host + port + route,
            headers: {
                "Content-Type": "application/json"
            },
            data: body
        })
    )
}