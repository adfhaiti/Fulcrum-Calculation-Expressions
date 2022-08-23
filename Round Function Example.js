// This expression takes to numerical fields and multiplies them together. 
// Then it multiplies that result by 0.10.
// Finally it takes that last results and rounds it to zero places.

ROUND((($pri_materyel_site_num * $kantite_materyel_num) * 0.10), 0)

// fulcrumapp.com notes
// ROUND(value: number, scale: number): number (+3 overloads)
// Rounds a number to given scale
// View Documentation - https://learn.fulcrumapp.com/dev/expressions/reference/round/
// @param - number (Number, required): numeric value to be rounded
// @param - scale (Number, optional): number of digits required after the
// decimal point
// @returns - rounded number
// @example - ROUND(-2.3333333, 4) // return -2.3333;
