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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ------------ FireBase ------------- \\
var fireBase_1 = __importDefault(require("../../db/fireBase"));
var fireBase_admin_1 = __importDefault(require("../../db/fireBase.admin"));
// ------------ FireBase => doc ------------- \\
var chats_1 = __importDefault(require("../../db/doc/chats"));
exports.default = {
    Query: {
        user: function (_, args) { return __awaiter(void 0, void 0, void 0, function () {
            var id, user;
            return __generator(this, function (_a) {
                id = args.id;
                try {
                    if (!id)
                        throw new Error("cant find user");
                    user = fireBase_1.default.auth();
                    return [2 /*return*/, user];
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        }); },
        signIn: function (_, args) { return __awaiter(void 0, void 0, void 0, function () {
            var _a, email, password, user, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = args.signInInput, email = _a.email, password = _a.password;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        if (!password || !email) {
                            return [2 /*return*/, {
                                    status: false,
                                    message: "please fill all fields!",
                                }];
                        }
                        return [4 /*yield*/, fireBase_admin_1.default.auth().getUserByEmail(email)];
                    case 2:
                        user = _b.sent();
                        if (!user) {
                            return [2 /*return*/, {
                                    status: false,
                                    message: "cant find such user!",
                                }];
                        }
                        // Auth User
                        return [2 /*return*/, fireBase_1.default.auth()
                                .signInWithEmailAndPassword(email, password)
                                .then(function (auth) {
                                var _a;
                                var authUser = auth.user;
                                return (_a = auth.user) === null || _a === void 0 ? void 0 : _a.getIdToken().then(function (token) {
                                    var userInfo = {
                                        id: authUser === null || authUser === void 0 ? void 0 : authUser.uid,
                                        email: authUser === null || authUser === void 0 ? void 0 : authUser.email,
                                        managerToken: {
                                            refresh_token: authUser === null || authUser === void 0 ? void 0 : authUser.refreshToken,
                                            access_token: token,
                                        },
                                    };
                                    return {
                                        status: true,
                                        data: userInfo,
                                    };
                                });
                            })
                                .catch(function (errors) {
                                return {
                                    status: false,
                                    message: errors.message,
                                };
                            })];
                    case 3:
                        error_1 = _b.sent();
                        return [2 /*return*/, {
                                status: false,
                                message: error_1.message,
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        }); },
    },
    Mutation: {
        createUser: function (_, args) { return __awaiter(void 0, void 0, void 0, function () {
            var _a, email, password, emailRegex, checkEmail;
            return __generator(this, function (_b) {
                _a = args.newUserInput, email = _a.email, password = _a.password;
                try {
                    if (!email || !password) {
                        return [2 /*return*/, {
                                status: false,
                                message: "please fill all fields!",
                            }];
                    }
                    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
                    checkEmail = emailRegex.test(email);
                    if (!checkEmail) {
                        return [2 /*return*/, {
                                status: false,
                                message: "email format is wrong!",
                            }];
                    }
                    if (password.length < 8) {
                        return [2 /*return*/, {
                                status: false,
                                message: "password min symbol should be 8 length",
                            }];
                    }
                    // Create User
                    return [2 /*return*/, fireBase_1.default.auth()
                            .createUserWithEmailAndPassword(email, password)
                            .then(function (data) {
                            var _a;
                            return (_a = data.user) === null || _a === void 0 ? void 0 : _a.getIdToken().then(function (token) {
                                var _a, _b, _c;
                                var userInfo = {
                                    id: (_a = data.user) === null || _a === void 0 ? void 0 : _a.uid,
                                    email: (_b = data.user) === null || _b === void 0 ? void 0 : _b.email,
                                    managerToken: {
                                        refresh_token: (_c = data.user) === null || _c === void 0 ? void 0 : _c.refreshToken,
                                        access_token: token,
                                    },
                                };
                                return {
                                    status: true,
                                    data: userInfo,
                                };
                            });
                        })
                            .catch(function (err) {
                            if (err) {
                                return {
                                    status: false,
                                    message: "such user arleady uses such email",
                                };
                            }
                        })];
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        }); },
        removeAccount: function (_, args) { return __awaiter(void 0, void 0, void 0, function () {
            var userId, chatArray, removeEverything, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = args.userId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        if (!userId)
                            return [2 /*return*/, {
                                    status: false,
                                    message: "can't find userId",
                                }];
                        return [4 /*yield*/, chats_1.default.where("userId", "==", userId).get()];
                    case 2:
                        chatArray = _a.sent();
                        removeEverything = chatArray.docs.map(function (doc) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, chats_1.default
                                            .doc(doc.id)
                                            .delete()
                                            .then(function () { return __awaiter(void 0, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, fireBase_admin_1.default.auth().deleteUser(userId)];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/, {
                                                status: true,
                                                message: "removed succesfuly",
                                            }];
                                }
                            });
                        }); });
                        return [2 /*return*/, removeEverything[0]];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        }); },
    },
};
