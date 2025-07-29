import Events from "../models/Events";
import House from "../models/House"

export const isHouse = (card) => {
    return (card instanceof House) ? true : false;
}

export const isEvent = (card) => {
    return (card instanceof Events) ? true : false;
}
