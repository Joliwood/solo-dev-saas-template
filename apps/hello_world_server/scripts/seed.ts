import mongoose from "mongoose";
import { faker } from "@faker-js/faker";

// Ton schéma User rapide
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// Seed function
async function seed() {
  await mongoose.connect("mongodb://localhost:27017/myDb"); // adapte ton nom de base

  await User.deleteMany(); // Nettoie avant
  const fakeUsers = Array.from({ length: 50 }, () => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    age: faker.number.int({ min: 18, max: 80 }),
  }));

  await User.insertMany(fakeUsers);

  console.log("✅ Seed terminé :", fakeUsers.length, "utilisateurs créés.");

  await mongoose.disconnect();
}

// Lance le seed
seed().catch((err) => {
  console.error(err);
  mongoose.disconnect();
});
