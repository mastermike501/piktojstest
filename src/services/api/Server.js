// import axios from 'axios';

// const apiUrl = 'http://localhost:8000';

export default {
    getImages() {
        // mocking backend code as I'm unable to configure the server to accept CORS requests
        return new Promise(function (res) {
            res(["http://localhost:8000/images/uploads-1462948453043.png", "http://localhost:8000/images/uploads-1462948459604.png", "http://localhost:8000/images/uploads-1462948470584.png", "http://localhost:8000/images/uploads-1462948491987.png", "http://localhost:8000/images/uploads-1462948498227.png"]);
        });
        // return axios.get(`${apiUrl}/images`);
    }
}