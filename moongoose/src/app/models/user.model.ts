import { model, Schema } from "mongoose";
import { IAddress, IUser } from "../interfaces/user.interface";

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


const userSchema = new Schema<IUser>(
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

// ✅ Model creation
export const User = model<IUser>("User", userSchema);
