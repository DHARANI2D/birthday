import { deg } from './util.js';

export const R = 1.45; // cake radius
export const H = 1.3; // cake height
export const CR = 0.07; // top-edge rounding
export const STAND_Y = 0.7; // y of the stand plate surface == cake base
export const SIDE_PLATE_Y = 0.04; // y of the dessert plate surface
export const FLOOR_Y = -6.25;

// The two radial cuts (angle measured from +z toward +x). The wedge faces Kaviya,
// who stands at the back-left of the table, so the knife handle points at her.
export const CUT_A = deg(-135);
export const CUT_B = deg(-95);
export const CUT_MID = (CUT_A + CUT_B) / 2;
export const CUT_HALF = (CUT_B - CUT_A) / 2;

// the round table
export const TABLE = { cx: 0, cz: 0.5, rx: 3.6, rz: 4.1 };

// where the dessert plate sits on the table
export const SIDE_PLATE_POS = { x: -1.45, z: 2.55 };

// knife / server dimensions (shared by tools.js and story.js)
export const KNIFE = { blade: 1.65, bladeH: 0.34, handle: 0.95 };
export const SERVER = { len: 1.15, wid: 0.44, handle: 0.9 };
