import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }
});


userSchema.methods.matchPassword = async function (enteredPassword: string) {
  console.log('Entered Password:', enteredPassword);
  console.log('Stored Password Hash:', this.password);
  return await bcrypt.compare(enteredPassword, this.password);
};


const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;