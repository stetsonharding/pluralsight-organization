import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.API_URL + "/courses/"

export function getCourse() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError)
}

export function saveCourse(course) {
    return fetch(baseUrl, (course.id || ""), {
        method: course.id ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(course)
    })

        .then(handleResponse)
        .catch(handleError)
}

export function deleteCourse(courseId) {
    return fetch(baseUrl + courseId, { method: 'DELETE' })
        .then(handleResponse)
        .then(handleError)
}