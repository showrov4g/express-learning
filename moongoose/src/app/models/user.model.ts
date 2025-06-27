import { Model, model, Schema } from "mongoose";
import { IAddress, IUser, IUserMethods, IUserStaticModels, userInstanceMethod } from "../interfaces/user.interface";
import { Validator } from "mongoose";
import bcrypt from "bcryptjs"

// ✅ Schema definition with correct structure
const addressSchema = new Schema<IAddress>(
   {
        city: { type: String },
            street: { type: String },
            zip: { type: Number }
   },{
    _id:false
   }
)


const userSchema = new Schema<IUser,IUserStaticModels, Model<IUser>,IUserMethods>(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"],
            trim: true,
            minlength: [3, "First name must be at least 3 characters, got {VALUE}"],
            maxlength: 10,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        age: {
            type: Number,
            required: true,
            min: [18, "Age must be above 18, got {VALUE}"],
            max: 60,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            unique: [true, "The email already exists, got {VALUE}"],
            validate: {
                validator: function (value: string) {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                },
                message: function (props: any) {
                    return `Email ${props.value} is not a valid email`;
                },
            },
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: {
                values: ["USER", "ADMIN", "SUPERADMIN"],
                message: "Role is not valid, got {VALUE}",
            },
            default: "USER",
        },
        address: {
             type: addressSchema 
            },
    },
    {
        timestamps: true,    // ✅ Adds createdAt and updatedAt
        versionKey: false    // ✅ Disables __v version key
    }
);


userSchema.methods.hashPassword = async function (password: string): Promise<void> {
  this.password = await bcrypt.hash(password, 10);
};
userSchema.static("hashPassword", async function(plainPassword: string){
    const password = await bcrypt.hash(plainPassword, 10);
    return password;
})
// ✅ Model creation
export const User = model<IUser, IUserStaticModels>("User", userSchema)
