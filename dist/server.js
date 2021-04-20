"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const init = () => {
    let app = express_1.default();
    let router = [
        {
            http: 'get',
            path: '/daynamic',
            handler: (req, res) => {
                res.send(`Welcome to the application\n ${req.method} get`);
            }
        }
    ];
    router.forEach(route => {
        app[route.http](route.path, route.handler);
    });
    app.get('/', (req, res) => {
        res.send(`Welcome to the application\n ${req.method} get`);
    });
    app.use('/', (req, res) => {
        res.send(`Welcome to the application\n ${req.method} fromappuse`);
    });
    return app;
};
const app = init();
const port = 3000;
app.listen(port, () => {
    console.log('listening on port ' + port);
});
//# sourceMappingURL=server.js.map