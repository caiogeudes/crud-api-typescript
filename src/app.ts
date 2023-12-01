import express from "express";
import SetupRoutes from "./routes";

class App {
    private app: express.Application;
    private port: any

    constructor() {
        this.app = express();

        this.json();
        this.routes();
        this.listen(this.port);
    }

    private json() {
        this.app.use(express.json());
    }

    private routes() {
        this.app.use(SetupRoutes);
    }

    listen(port: any) {
        return this.app.listen(port);
    }
}

export default new App;