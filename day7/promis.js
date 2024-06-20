const fetchPosts = async () => {
    //fetch posts from "https://jsonplaceholder.typicode.com/posts"
    //return the posts
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
};

const fetchPostById = async (id) => {
    //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
    //return the post
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/${id}");
    const posts = await response.json();
    return posts;
};

const sequentialPromise = async (promises, order) => {
    //execute promises sequentially
    //return the results in the order specified
    //if there is a rejected promise, throw an error, and stop executing the rest of the promises
    const results = [];
    const promisesReasign = []
    for (const index of order) {
        let i = index-1;
        promisesReasign.push(promises[i]);
        }

    Promise.all(promisesReasign)
    .then(
        data =>{
            console.log(data)
        }
    )
    .catch( error => {
        console.log(error)
    }
    )
    //Example:
    //order = [2,1,3]
    //promises = [
    //   Promise.resolve("data1"),
    //   Promise.resolve("data2"),
    //   Promise.resolve("data3"),
    // ];
    //results = ["data2", "data1", "data3"]
};
const order = [2, 1, 3]
const promises = [
    Promise.resolve("data1"),
    Promise.resolve("data2"),
    Promise.resolve("data3"),
];
console.log(sequentialPromise(promises, order));