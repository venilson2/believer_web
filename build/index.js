"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const viewsPath = path_1.default.join(__dirname, '..', 'src', 'views');
app.set('views', viewsPath);
app.set('view engine', 'ejs');
app.use(express_1.default.json());
app.get('/', (req, res) => {
    const data = {
        message: 'Hello',
    };
    return res.render('index', { data });
});
app.listen(3000, () => console.log('Listening on port 3000'));
