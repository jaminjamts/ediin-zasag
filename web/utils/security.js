// utils/decrypt.js
import CryptoJS from "crypto-js";

const password = process.env.NEXT_PUBLIC_CRYPTO_PASSWORD;
const salt = process.env.NEXT_PUBLIC_CRYPTO_SALT;

function getKey() {
  return CryptoJS.PBKDF2(password, salt, {
    keySize: 32 / 4,
    iterations: 1000,
    hasher: CryptoJS.algo.SHA512,
  });
}

export function decryptFromBackend(ivHex, encryptedDataHex) {
  const key = getKey();
  const iv = CryptoJS.enc.Hex.parse(ivHex);
  const encrypted = CryptoJS.enc.Hex.parse(encryptedDataHex);

  const decrypted = CryptoJS.AES.decrypt({ ciphertext: encrypted }, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}
