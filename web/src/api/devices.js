
import BaseApi from "./base";

class DevicesApi extends BaseApi {

    static getAll() {
        return this.call("devices");
    }

    static register(device) {
        return this.call("devices/register", device, "POST");
    }

}

export default DevicesApi;