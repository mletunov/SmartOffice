
class BaseApi {

    static call(url, data, method = "GET") {
        return fetch("/api/" + url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            if (response.status !== 200) {
                throw new Error(response.status);
            }
            return response.json()
        });
    }

}

export default BaseApi;