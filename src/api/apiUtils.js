export async function handleResponse(res) {
if(res.ok) return res.json();
if(res.status === 400) {
    const error = await res.text();
    throw new Error(error)
}
throw new Error("Network res was no ok.")
}


//In real app would call a error logging service
export function handleError(error){
console.error("API call failed" + error)
throw error;
}