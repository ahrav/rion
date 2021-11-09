import { METERS_TO_MPH_RATIO } from "../constants/Numerics";

export const metersToMPH = (num: number) => num * METERS_TO_MPH_RATIO;
