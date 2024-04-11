import { API_URL, FINANCIAL_TERMS } from "../constants/env"

export const getfinancialTerms = (text: string) => {
    return fetch(API_URL + FINANCIAL_TERMS,{
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
            text : text
        })
    })
}