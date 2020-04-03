import http from "../config/api/http-common";





class WisorsDataServices {
    getAll() {
        return http.get(`/user/phone`);
    }

    get(id) {
        return http.get(`/user/phone/${id}`);
    }

    create(data) {
        return http.post(`/user/registration/create`, data);
    }

    update(id, data) {
        return http.put(`/user/registration/update/${id}`, data);
    }

    delete(id) {
        return http.delete(`/user/registration/delete/${id}`)
    }

}


export default  WisorsDataServices;