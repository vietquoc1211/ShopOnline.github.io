const momgoose = require("mongoose");
const categorySchema = new momgoose.Schema({
    name: String,
    Books_id: [{ type: momgoose.Types.ObjectId}]
});

module.exports = momgoose.model("Category",categorySchema);