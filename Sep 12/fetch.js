fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({name: "John"}),
})
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
