import axios from "axios";

async function getData(userId){
    if(userId != NaN){
        let {data: user} = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        let {data: post} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
       
        console.log(user, "post", post)
    }else{
        console.log("userId is not a number");
    }
}

export default getData;