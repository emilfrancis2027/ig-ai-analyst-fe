import { API_URL, FIVE_TAKEAWAYS } from "../constants/env"

export const getFiveTakeawaysFromtext = (text: string, isDetailed: boolean) => {
    return fetch(API_URL + FIVE_TAKEAWAYS,{
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' :'http://localhost:3000',
            'Access-Control-Allow-Credentials' : 'true',
            'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept',
          },
        body: JSON.stringify({
            text : text,
            is_detailed: isDetailed
        })
    })
}