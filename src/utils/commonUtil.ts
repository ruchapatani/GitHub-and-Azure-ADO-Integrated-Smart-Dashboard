import { ACCESS_TOKEN, ID_TOKEN, PATH, REFRESH_TOKEN } from "../constants/appContants";

export const getTokensFromStorage = () => ({
    idToken: localStorage.getItem(ID_TOKEN),
    accessToken: localStorage.getItem(ACCESS_TOKEN),
    refreshToken: localStorage.getItem(REFRESH_TOKEN),
});


export async function getCacheConfig(facilityCode: string, status: boolean) {
    return (facilityCode && !status) ? "123" : "2321";
}



export async function getItemData(key: string, apiMethod: string, apiRequest: any) {
    return {};
}

/**
 * Replace curly braces "{}" wrapped strings with thier env defined value.
 */
const interpolateEnv = (st: string, ar: any) =>
    st.replace(/{([^{}]*)}/g, (a: any, b: string) => {
        const r = ar[b];
        return typeof r === 'string' || typeof r === 'number' ? r : a;
    });
export default interpolateEnv;

export function logout() {
  localStorage.removeItem(ID_TOKEN);
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  localStorage.removeItem(PATH);
}
