export function handleResponse(response) {
    if (!response.ok) {
        console.error("HTTP error", response.status, response.statusText);
        throw new Error('Network response was not ok');
    }
    return response.json();  // Assuming the response body is JSON
}


//In real app would call a error logging service
export function handleError(error){
console.error("API call failed" + error)
throw error;
}