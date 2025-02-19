function vowelsAndConsonants(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A','E', 'O', 'U', 'I' ];
    let consonants = [];
    
    for (let x of s ) {
        if (vowels.includes(x)) {
            console.log(x)
        }else {
             consonants.push(x); 
        }
        
    }
    for (let i of consonants) {
        console.log(i); 
    }
}