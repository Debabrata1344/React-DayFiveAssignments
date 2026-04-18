export const getUsersPromise = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        });
};