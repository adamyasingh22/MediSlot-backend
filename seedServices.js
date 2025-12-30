const mongoose = require("mongoose");
require("dotenv").config();

const Service = require("./models/Service");
const connectDB = require("./config/db");

const services = [
  {
    title: "General Physician",
    description: "Diagnosis and treatment for common illnesses.",
    icon: "🩺",
  },
  {
    title: "Cardiology",
    description: "Heart-related checkups and treatments.",
    icon: "❤️",
  },
  {
    title: "Dermatology",
    description: "Skin, hair, and nail treatments.",
    icon: "🧴",
  },
  {
    title: "Pediatrics",
    description: "Healthcare services for children.",
    icon: "👶",
  },
  {
    title: "Orthopedics",
    description: "Bone, joint, and muscle care.",
    icon: "🦴",
  },
  {
    title: "Dental Care",
    description: "Dental checkups and oral hygiene services.",
    icon: "🦷",
  },
];

const seedServices = async () => {
  try {
    await connectDB();
    await Service.deleteMany();
    await Service.insertMany(services);

    console.log("✅ Services inserted successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedServices();
