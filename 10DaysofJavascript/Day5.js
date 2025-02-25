/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const A = expressions[0];
    const P = expressions[1];
    
    const s1 = (P + Math.sqrt((P * P) - (16 * A)))/4;
    const s2 = (P - Math.sqrt((P * P) - (16 * A)))/4;
    
    return [s1, s2].sort((a, b) => a - b);
}