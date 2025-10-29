import bcrypt from "bcrypt";

const hashed = await bcrypt.hash("mySecretData", 10);
console.log("Hashed:", hashed);

const isMatch = await bcrypt.compare("mySecretData", hashed);
console.log("Match:", isMatch);
