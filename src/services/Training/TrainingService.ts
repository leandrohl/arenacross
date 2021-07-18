
export const TrainingService = () => {
    const url = "http://localhost:5000/posts/get"

    return fetch(url, {
        method: 'GET'
    })
    // .then(response => response.json())
    // .then(data => {
    //     return data.response;
    // })
    // .catch()
}