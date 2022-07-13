import { database } from "../db";
import { register } from "../models/register";

export class operationsService {

    public urlSite: String = "";
    public idFolder: String = "";
    public urlLocal: String = "";
    public idImg: String = "";

    constructor() { }

    public static async insert(
        urlSite: String,
        idFolder: String,
        urlLocal: String,
        idImg: String,
    ) {
        let newRegister = new register(
            {
                urlSite: urlSite,
                idFolder: idFolder,
                urlLocal: urlLocal,
                idImg: idImg
            })
        await newRegister.save();
    }

}