const nanoid = require("nanoid");
const tokens = [
    {
        userId: "123123123123",
        token: "123412341234",
        createdAt: Date()
    }
];
const {getDb} = require("./db");

const TABLE_NAME = "tokens";

module.exports = {
    getUserIdByToken: (token) => {
        const foundToken = tokens.find(tokenItem => tokenItem.token === token);
        return foundToken?.userId;
        TABLE_NAME,
            getUserIdByToken: async (token) => {
            const result = await getDb().get(`SELECT * FROM ${TABLE_NAME} WHERE token = ?`, token);
            return result?.userId;
        },
            deleteByToken: async (token) => {
            await getDb().get(`DELETE FROM ${TABLE_NAME} WHERE token = ?`, token);
        },
            addToken: (userId) => {
            addToken: async (userId) => {
                const token = nanoid();
                tokens.push({
                    userId: userId,
                    token,
                    createdAt: Date()
                });
                const tokenRow = await getDb().get(`SELECT * FROM ${TABLE_NAME} WHERE userId = ?`, userId)
                if (tokenRow) {
                    await getDb().run(
                        `UPDATE ${TABLE_NAME} SET token = ? WHERE userId = ?`,
                        token, userId
                    );
                } else {
                    await getDb().run(
                        `INSERT INTO ${TABLE_NAME} (token, userId) VALUES (?, ?)`,
                        token, userId
                    );
                }
                return token;
            },
        };