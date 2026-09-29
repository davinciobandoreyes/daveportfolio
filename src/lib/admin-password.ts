import { scryptSync, timingSafeEqual } from "crypto";

export function verifyPassword(password: string, stored: string) {
  const [saltHex, hashHex] = stored.split(".");
  if (!saltHex || !hashHex || saltHex.length % 2 !== 0 || hashHex.length % 2 !== 0) {
    return false;
  }

  let salt: Buffer;
  let expected: Buffer;
  try {
    salt = Buffer.from(saltHex, "hex");
    expected = Buffer.from(hashHex, "hex");
  } catch {
    return false;
  }
  if (salt.length === 0 || expected.length === 0) return false;

  const actual = scryptSync(password, salt, expected.length);
  if (actual.length !== expected.length) return false;
  return timingSafeEqual(actual, expected);
}

export function emailsMatch(input: string, expected: string) {
  const left = Buffer.from(input.trim().toLowerCase());
  const right = Buffer.from(expected.trim().toLowerCase());
  if (left.length !== right.length) {
    timingSafeEqual(left, left);
    return false;
  }
  return timingSafeEqual(left, right);
}
