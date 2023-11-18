const URL = "https://jsonplaceholder.typicode.com/users";

const userName = document.getElementById("name");
const lastname = document.getElementById("lastname");
const date = document.getElementById("date");

console.log(userName.value, lastname.value, date.value)


const postFetch = async () => {
  try {
    myObj = { name: userName.value, lastname: lastname.value, date: date.value };
    const request = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(myObj),
        headers: {
            "Content-Type": "application/json",
          },
        })
    const response = await request.json()
        console.log(response)
  } catch (error) {
    console.log(error)
  }
};
