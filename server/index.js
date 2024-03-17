"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = require("dotenv");
const server_1 = require("@apollo/server");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const schema_1 = require("@graphql-tools/schema");
const express4_1 = require("@apollo/server/express4");
const app = (0, express_1.default)();
// ------------- Middleware ---------- \\
(0, dotenv_1.config)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// ------------- Resolver / TypeDefs ---------- \\
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const typeDefs_1 = __importDefault(require("./graphql/typeDefs"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = (0, schema_1.makeExecutableSchema)({ typeDefs: typeDefs_1.default, resolvers: resolvers_1.default });
        const httpServer = http_1.default.createServer(app);
        const server = new server_1.ApolloServer({
            schema: schema,
            plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
        });
        yield server.start();
        app.use("/", (0, cors_1.default)({
            origin: "http://localhost:3000",
            credentials: true,
        }), express_1.default.json(), (0, express4_1.expressMiddleware)(server));
        yield new Promise((resolve) => {
            httpServer.listen(5000, resolve);
        });
        console.log(`🚀 Server ready at http://localhost:5000/`);
    });
}
exports.default = main;
main().catch((err) => console.log(err));
