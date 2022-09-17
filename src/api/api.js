import http from "@/utils/http";

export default {
    getUploadData(params) {
        return http.get('/getAll', params)
    }
}



