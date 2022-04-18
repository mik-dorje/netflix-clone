import axios from "axios"

//base url to make requests to the movie database
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

//using the instance, we can do
// instance.get('/foo-bar') 
//for requesting https://api.themoviedb.org/3/foo-bar


export default instance;
//as it is exported default, we can import it into other js file using any alias name
//if the export was not default, we need to import by destructing using swigly bracket
//we can only have one default export in a file
//but we can include multiple info in one file and destructure while importing

