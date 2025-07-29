import Bonus from "./Bonus";
import House from "./House"

export const isHouse = (card) => {
    return (card instanceof House) ? true : false;
}

export const isBonus = (card) => {
    return (card instanceof Bonus) ? true : false;
}
