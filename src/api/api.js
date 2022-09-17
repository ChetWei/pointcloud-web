import http from "@/utils/http";


export function predictData(id) {
    let params = {"id": id}
    return http.post('/predict', params)
}

export function deleteData(id) {
    let params = {"id": id}
    return http.post('/delete', params)
}


export function getUploadData(params) {
    return http.get('/all', params)
}


export function getResultData(params) {
    return http.get('/result', params)
}


