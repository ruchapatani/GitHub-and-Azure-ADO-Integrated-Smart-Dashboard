import React from 'react';
import interpolateEnv, { getCacheConfig, getItemData, getTokensFromStorage } from '../utils/commonUtil';
import { FACILITY_AUTHORIZATION, FACILITY_CODE } from '../constants/appContants';
import * as ls from "../utils/localStorageUtil";

export type AuthContextType = {
    getAuthObject: () => any;
    setUserAuthObj: () => void;
    login: () => void;
    logout: () => void;
    checkTokens: () => boolean;
    updateUser: (userdt: any) => void;
};


export const AuthContext = React.createContext<AuthContextType | null>(null);

/**
 * Return Auth Context Object
 * @returns
 */
export function useAuth() {
    return React.useContext(AuthContext)
}

export interface AppProps {
    children: any;
}

/**
 * AuthContext Provider to handle User Data dcf
 * @param {*} param0
 * @returns
 */
export const AuthProvider = ({ children }: AppProps) => {
    const [user, setUser] = React.useState(null);
    const [userAuthObj, setUserAuthObj] = React.useState(null);

    /**
     * Set User Data
     * @param {*} userdt
     */
    function updateUser(userdt: any): void {
        setUser({
            ...userdt,
            email: userdt.email ?? userdt.sub,
            full_name: `${userdt.given_name ?? ""} ${userdt.family_name ?? ""}`,
        });
    }
    // check for access and id tokens in session storage
    // if id token is not expired, return true and update user state variable
    function checkTokens(): boolean {
        const { idToken } = getTokensFromStorage();
        if (idToken) {
            // parse id token
            // check token for expiration
            return false;
            // send request to auth
        }
        return false;
    }

    /**
     * Used to get Authentication from storage or if not in storage then from api
     * @returns {Object} userAuthObj
     */
    const getAuthObject = async () => {
        const facilityCode = await getCacheConfig(FACILITY_CODE, false);
        if (!userAuthObj && facilityCode) {
            const data = await getItemData(
                FACILITY_AUTHORIZATION,
                "getAuthorizationObject",
                {
                    moduleName: FACILITY_AUTHORIZATION,
                }
            );

            return data;
        }
        return userAuthObj;
    };

    /**
     * Initiation login  through Authentication call with required paranmeters 1st step for Oauth 2.0 PKCE
     * scope: openid
     * code_challenge_method: S256
     * response_type: code
     */

    function login() {
        const authUrl: string = (process.env.AUTH_URL) ? process.env.AUTH_URL : "";
        const authArgs = {
            KOCHID_URL: process.env.KOCHID_URL,
            CLIENT_ID: process.env.CLIENT_ID,
            LOGIN_REDIRECT_URL: process.env.LOGIN_REDIRECT_URL,
            PKCE_SCOPE: process.env.PKCE_SCOPE,
        };
        const parsedAuthUrl: string = interpolateEnv(authUrl, authArgs); // interpolateEnv: mehtod to replace keys from string with arg values
        window.location.replace(parsedAuthUrl);
    }

    function logout() {
        window.location.replace('/login');// redirect to login page
    }

    /**
 *
 */
    return (
        <AuthContext.Provider
            value={{
                login,
                logout,
                getAuthObject,
                updateUser,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
