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
// ------------ FireBase ------------- \\
const fireBase_1 = __importDefault(require("../../db/fireBase"));
const fireBase_admin_1 = __importDefault(require("../../db/fireBase.admin"));
// ------------ FireBase => doc ------------- \\
const chats_1 = __importDefault(require("../../db/doc/chats"));
exports.default = {
    Query: {
        user: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { id } = args;
            try {
                if (!id)
                    throw new Error("cant find user");
                const user = fireBase_1.default.auth();
                return user;
            }
            catch (error) {
                throw error;
            }
        }),
        signIn: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { email, password } = args.signInInput;
            try {
                if (!password || !email) {
                    return {
                        status: false,
                        message: "please fill all fields!",
                    };
                }
                // find user
                const user = yield fireBase_admin_1.default.auth().getUserByEmail(email);
                if (!user) {
                    return {
                        status: false,
                        message: "cant find such user!",
                    };
                }
                // Auth User
                return fireBase_1.default.auth()
                    .signInWithEmailAndPassword(email, password)
                    .then((auth) => {
                    var _a;
                    const authUser = auth.user;
                    return (_a = auth.user) === null || _a === void 0 ? void 0 : _a.getIdToken().then((token) => {
                        const userInfo = {
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
                    .catch((errors) => {
                    return {
                        status: false,
                        message: errors.message,
                    };
                });
            }
            catch (error) {
                return {
                    status: false,
                    message: error,
                };
            }
        }),
    },
    Mutation: {
        createUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { email, password } = args.newUserInput;
            try {
                if (!email || !password) {
                    return {
                        status: false,
                        message: "please fill all fields!",
                    };
                }
                // check Email Format
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
                const checkEmail = emailRegex.test(email);
                if (!checkEmail) {
                    return {
                        status: false,
                        message: "email format is wrong!",
                    };
                }
                if (password.length < 8) {
                    return {
                        status: false,
                        message: "password min symbol should be 8 length",
                    };
                }
                // Create User
                return fireBase_1.default.auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then((data) => {
                    var _a;
                    return (_a = data.user) === null || _a === void 0 ? void 0 : _a.getIdToken().then((token) => {
                        var _a, _b, _c;
                        const userInfo = {
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
                    .catch((err) => {
                    if (err) {
                        return {
                            status: false,
                            message: "such user arleady uses such email",
                        };
                    }
                });
            }
            catch (error) {
                throw error;
            }
        }),
        removeAccount: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { userId } = args;
            try {
                if (!userId)
                    return {
                        status: false,
                        message: "can't find userId",
                    };
                // remove Chats
                const chatArray = yield chats_1.default.where("userId", "==", userId).get();
                const removeEverything = chatArray.docs.map((doc) => __awaiter(void 0, void 0, void 0, function* () {
                    yield chats_1.default
                        .doc(doc.id)
                        .delete()
                        .then(() => __awaiter(void 0, void 0, void 0, function* () {
                        yield fireBase_admin_1.default.auth().deleteUser(userId);
                    }));
                    return {
                        status: true,
                        message: "removed succesfuly",
                    };
                }));
                return removeEverything[0];
            }
            catch (error) {
                throw error;
            }
        }),
    },
};
