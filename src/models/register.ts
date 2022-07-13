import mongoose from "mongoose";

interface Register {
  urlSite: String;
  idFolder: String;
  urlLocal: String;
  idImg: String;
}

const registerSchema = new mongoose.Schema({
  urlSite: {
    type: String,
    required: true
  },
  idFolder: {
    type: String,
    required: true
  },
  urlLocal: {
    type: String,
    required: true
  }, 
  idImg: {
    type: String,
    required: true
  }
})

const register = mongoose.model('Register', registerSchema);

export { register }