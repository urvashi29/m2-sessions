// GET Request
// https://jsonplaceholder.typicode.com/posts/
// https://jsonplaceholder.typicode.com/users
// https://dummy.restapiexample.com/api/v1/employees
// https://dummyjson.com/products
// https://rapidapi.com/ -> movie api
// https://restful-api.dev/

// POST Request
// https://restful-api.dev/

// GET 200
// POST 201/200

// axios: http library, based on promises
function getUserDate() {
  //api call
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       console.log(response.data);
  //       //   DOM manipulation
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  try {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(async (response) => {
        const data = await response.data;
        console.log(data);
        //action on data
        displayData(data);
      });
  } catch (err) {}
}

function displayData(data){
    //DOM Manipulation code
}

// fetch in built browser API
async function getPostData() {
  //   fetch("https://jsonplaceholder.typicode.com/posts/")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    console.log(response);
    // if (!response.ok) {
    //   throw new Error("Data processing error!");
    // }
    if (response.error) {
      throw new Error("Data processing error!");
    }
    const data = await response.json();
    console.log(data);
    // DOM manipulation
  } catch (err) {
    console.log(err);
  }
}

function postData() {

  axios
    .post("https://api.restful-api.dev/objects", {
      name: "Apple MacBook Pro 16",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
      },
    })
    .then(async (res) => {
      const data = await res;
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Task:
// use Axios: Try get the data movie API, E-commerce and display in UI (Rapid Api & https://dummyjson.com/products)
// use Fetch: Get the data from user and do post request, display in UI "Account Registered" -->
