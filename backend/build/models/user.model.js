import { orm } from "../lib/app.js";
const User = orm.model("users", {
    beforeUpdate: (doc) => {
        doc.updatedAt = new Date().toISOString();
    },
}, {
    username: { type: "String", required: true },
    email: { type: "String", required: true },
    hash: { type: "String", required: true },
    profilePic: { type: "String" },
    updatedAt: { type: "Date", default: () => new Date().toISOString() },
    createdAt: { type: "Date", default: () => new Date().toISOString() },
});
export default User;
