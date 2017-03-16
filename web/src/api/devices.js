
import BaseApi from "./base";

class DevicesApi extends BaseApi {

    static getAll() {
        return this.call("devices");
    }

}

export default DevicesApi;