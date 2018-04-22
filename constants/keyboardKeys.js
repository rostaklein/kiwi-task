import keyboardKeys from "./phoneKeyboard.json";

export const validNumbers = keyboardKeys.filter(key=>key.subs).map(key=>key.main);
export default keyboardKeys;