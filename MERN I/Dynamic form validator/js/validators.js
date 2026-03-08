/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */

export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
/**
 * Validate task text
 * @param {string} text
 * @returns {boolean}
 */
export function validateText(text) {
  return text.trim().length >= 3;
}