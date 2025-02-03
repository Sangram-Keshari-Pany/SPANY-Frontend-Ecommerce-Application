import { Authorization, SPANYaxios } from "../../APICall";
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';


async function savetoken(navigation: any, accessToken: string, refreshToken: string, userDetails: any, fetchdata: any) {
    try {
        await RNSecureStorage.setItem('access_token', accessToken, { accessible: ACCESSIBLE.WHEN_UNLOCKED });
        await RNSecureStorage.setItem('refresh_token', refreshToken, { accessible: ACCESSIBLE.WHEN_UNLOCKED });
        await RNSecureStorage.setItem('userDetails', userDetails, { accessible: ACCESSIBLE.WHEN_UNLOCKED });
        console.log('Tokens saved successfully');
        Authorization(navigation, fetchdata)
    } catch (error) {
        console.error('Error saving tokens:', error);
        throw error;
    }
}

export async function userregistration(navigation: any, params: any,fetchdata:Function) {
    try {
        const response = await SPANYaxios.post("/registration", params)
        if (response.status === 200 || response.status === 201) {
            const userData = response.data
            console.log(response.data);
            const accessToken = userData.access
            const refreshToken = userData.refresh
            const userDetails = JSON.stringify({ ...userData.user, ...userData.custom_user })
            console.log(userDetails)
            savetoken(navigation, accessToken, refreshToken, userDetails, fetchdata)
            navigation.navigate('Tab');
        } else {
            console.error("Error: Unable to add product. Status code:", response.status);
        }
    }
    catch (err) {
        console.error("Error while making request:", err);
    }

}

export async function userfetchdata(navigation: any, params: any) {
    try {
        const response = await SPANYaxios.get(`/customerfetch/${params}`, params)
        if (response.status === 200 || response.status === 201) {
            console.log(response.data);

            navigation.navigate('Password', response.data);
        } else {
            console.error("Error: Unable to add product. Status code:", response.status);
        }
    }
    catch (err) {
        console.error("Error while making request:", err);
    }
}


export async function userlogin(navigation: any, params: any, fetchdata: any) {
    try {
        const response = await SPANYaxios.post(`/login`, params)
        if (response.status === 200 || response.status === 201) {
            const userData = response.data
            console.log(response.data);
            const accessToken = userData.access
            const refreshToken = userData.refresh
            const userDetails = JSON.stringify({ ...userData.user, ...userData.custom_user })
            console.log(userDetails);

            savetoken(navigation, accessToken, refreshToken, userDetails, fetchdata)
        } else {
            console.error("Error: Unable to add product. Status code:", response.status);
        }
    }
    catch (err) {
        console.error("Error while making request:", err);
    }

}