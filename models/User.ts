import mongoose, {HydratedDocument, Model} from "mongoose";
import {UserFields} from "../types";

interface UserMethods {
    checkPassword: (password: string) => Promise<boolean>;
    generateToken(): void;
}

type UserModel = Model<UserFields, {}, UserMethods>;

const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema<
    HydratedDocument<UserFields>,
    UserModel,
    UserMethods,
    {}
>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", UserSchema);
export default User;