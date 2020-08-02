const errors = require("./errors.json");

function response(code) {
    if (!code) return console.error("You need to supply response code.");
    if (code === "401") return errors.e401;
    if (code === "403") return errors.e403;
    if (code === "404") return errors.e404;
    if (code === "429") return errors.e429;
    if (code === "500") return errors.e500;
    if (code === "503") return errors.e503;
}

module.exports = {
    response
}