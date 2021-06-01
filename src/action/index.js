import axios from 'axios'
import {API, KEY} from '../config'
export const FETCH_GIPHY= "FETCH_GIPHY"

export function fetchGiphyByName(name){
    const url= API+name+KEY
    const request = axios.get(url)

    return {
        type:FETCH_GIPHY,
        payload: request
    }
}