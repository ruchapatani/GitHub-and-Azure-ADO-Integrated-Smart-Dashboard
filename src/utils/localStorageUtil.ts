/**
 * Use to get json parsed value from localstorage
 * @param {*} key
 * @returns {Item} return parsed Item
 */
export function getItem (key: string): any { // return type is set as any so as that it can also return error
  return localStorage.getItem(key);
};

export const getItemObj = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '');
  } catch (error) {
    return localStorage.getItem(key);
  }
};

/**
 * Use to set value in localstorage
 * @param {*} key
 * @param {*} value
 * @returns {void}
 */
export function setItem (key: string, value: any): any {
  return localStorage.setItem(key,  value);
};

export const setItemObj = (key: string, value: any) => {
  if (key) {
    try {
      return localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      return localStorage.setItem(key, value);
    }
  }
  return null;
};

/**
 * Update local Storage Value
 * @param {*} key
 * @param {*} name
 * @param {*} value
 * @returns {void}
 */
export const updateItem = (key: string, name: string, value = '') => {
  const item = getItem(key);
  if (item) {
    if (name) {
      item[name] = value;
      try {
        return localStorage.setItem(key, JSON.stringify(item));
      } catch (error) {
        return localStorage.setItem(key, value);
      }
    }
  }
  return null;
};

/**
 * get Item from local storage based on a key
 * @param {*} key
 * @param {*} name
 * @returns {Item} returns Item based on a key
 */
export const fetchItem = (key: string, name: string) => {
  try {
    const item = getItem(key);
    if (item && name) return item[name];
    return item;
  } catch (error) {
    return localStorage.getItem(key);
  }
};

/**
 * remove Item from local storage based on a key
 * @param {*} key
 * @param {*} name
 * @returns {Item} returns Item based on a key
 */
export const removeItem = (key: string) => {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
    return null;
  }
};

/**
 * Checks if local storage is available in the current browser.
 * @returns {boolean} A boolean value indicating if local storage is available.
 */
export const isLocalStorageAvailable = () => {
  const key = 'test';
  try {
    localStorage.setItem(key, key);
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};
