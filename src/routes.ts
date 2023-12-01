import { Router } from "express";
import ControllersCRUD from "./controllers/crud";

class SetupRoutes {
    route: Router;

    constructor() {
        this.route = Router();
        this.routes();
    }

    private routes() {
        this.route.post('/create', ControllersCRUD.create);
        this.route.get('/read', ControllersCRUD.read);
        this.route.put('/update/:id', ControllersCRUD.update);
        this.route.delete('/delete/:id', ControllersCRUD.delete);
    }
}

export default new SetupRoutes().route;