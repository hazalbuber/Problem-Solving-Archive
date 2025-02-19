function getLetter(s) {
    let letter;
    const letters1 = ['a','e','i','o','u'];
    const letters2 = ['b', 'c', 'd', 'f', 'g'];
    const letters3 = ['h','j','k', 'l', 'm'];
    const letters4 = ['n','p','q','r','s','t','v','w','x','y','z'];
    
    let firstChar = s.charAt(0).toLowerCase();  
    if (letters1.includes(firstChar)) {
        letter = "A";
    } else if (letters2.includes(firstChar)) {
        letter = "B";
    } else if (letters3.includes(firstChar)) {
        letter = "C";
    } else if (letters4.includes(firstChar)) {
        letter = "D";
    }
    
    
    
    return letter;
}