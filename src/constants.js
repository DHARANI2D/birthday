import { deg } from './util.js';

export const R = 1.9; // cake radius
export const H = 1.7; // cake height
export const CR = 0.09; // top-edge rounding
export const STAND_Y = 0.8; // y of the stand plate surface == cake base
export const SIDE_PLATE_Y = 0.045; // y of the small serving plate surface

// The two radial cuts (angle measured from +z toward +x). The wedge faces Kaviya,
// who stands on the left of the table, so the knife handle points straight at her.
export const CUT_A = deg(-135);
export const CUT_B = deg(-95);
export const CUT_MID = (CUT_A + CUT_B) / 2;
export const CUT_HALF = (CUT_B - CUT_A) / 2;

// the oval table
export const TABLE = { cx: 0, cz: 0.9, rx: 4.0, rz: 4.7 };

// where the serving plate sits on the table
export const SIDE_PLATE_POS = { x: -1.6, z: 3.3 };
