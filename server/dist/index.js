"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 8080;
const numbers_1 = __importDefault(require("./numbers"));
const weather_1 = __importDefault(require("./weather"));
app.get("/weather", (req, res) => __awaiter(this, void 0, void 0, function* () {
    return res.json(yield weather_1.default());
}));
app.get("/arabic", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const num = req.query.number + "";
    if (!req.query.number) {
        return res.json({ ok: false });
    }
    res.json({ result: numbers_1.default(num), ok: true });
}));
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map