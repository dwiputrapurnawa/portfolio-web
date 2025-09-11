// hash.ts
import bcrypt from "bcryptjs";

async function main() {
    const password = "password"; // password yang mau di-hash
    const hash = await bcrypt.hash(password, 10); // 10 = salt rounds
    console.log("Password:", password);
    console.log("Hash:", hash);
}

main().catch((err) => console.error(err));
