const {getUserByLogin, addUser, getUserById} = require("../db/users");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    userRouter.get("/", async (req, res) => {
        const token = req.cookies.token;
        const userId = getUserIdByToken(token);
        const userId = await getUserIdByToken(token);
        if (!userId) {
            res.status(401).json({
                return res.status(401).json({
                    message: "Пользователь не авторизован"
                });
            }
            const user = await getUserById(userId);
            res.status(200).json(user);
        });

        userRouter.post("/", (req, res) => {
            if (getUserByLogin(req.body.login)) {
                res.status(400).json({
                    userRouter.post("/", async (req, res) => {
                        const user = await getUserByLogin(req.body.login);
                        if (user) {
                            return res.status(400).json({
                                message: "Такой пользователь уже есть"
                            });
                        }

                        const newUser = await addUser(req.body.login, req.body.password);
                        res.status(200).json(newUser);
                    });