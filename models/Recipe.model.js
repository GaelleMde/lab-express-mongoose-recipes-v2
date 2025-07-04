// Your code here ...
const mongoose = require("mongoose");

const RecipeSchema = new Recipe.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  instructions: String,
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  },
  ingredients: {
    type: [String],
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  duration: {
    type: Number, 
    min: 0,
  }
  isArchived: Boolean,
  created: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
