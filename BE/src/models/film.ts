import mongoosem, {Schema, model} from "mongoose";

export interface IFilm {
    type: string;
    imageUrl: string;
    title: string;
    overview: string;
    rate: number;
    toprate: number;
    popular: number;
    realeaseDate: string;
    genres: object;
    background: string;
    runtime: number;
    cast: object;
}

const filmSchema = new  Schema({
    type: {
        type: String,
        enum: ["movie", "tv"],
        require: true
    },
    imageUrl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
    rate: {
        type: String,
        required: true,
    },
    toprate: {
        type: Number,
        default: 0
    },
    popular: {
        type: Number,
        default: 0
    },
    realeaseDate: {
        type: String,
        required: true,
    },
    genres: {
        type: Array,
        required: true,
    },
    background: {
        type: String,
        required: true,
    },
    runtime: {
        type: String,
        required: true,
    },
    cast: {
        type: Array,
        required: true,
    },
},
{
    toObject: {
        virtuals: true,
        transform: (_, obj) => {
          delete obj._id;
          return obj;
        },
      },
    timestamps: true
}
)

export default model<IFilm>("Film", filmSchema);

