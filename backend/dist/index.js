import app from "./app.js";
import connectToDatabase from "./db/connection.js";
//connections and listeners
const PORT = process.env.PORT || 6000;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("Sever Open & Connected to Database"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map