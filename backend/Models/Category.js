const momgoose = require("mongoose");
const categorySchema = new momgoose.Schema({
    name: String,
    books_id: [{ type: momgoose.Types.ObjectId}]
});

module.exports = momgoose.model("category", categorySchema);