module.exports = {
    resolveUrl(NODE_ENV) {
        switch(NODE_ENV) {
            case "production": return "http://localhost:3001/api/";
            case "development": return "http://localhost:3001/api/";

            default: return "http://localhost:3001/api/";
        }
    }
}