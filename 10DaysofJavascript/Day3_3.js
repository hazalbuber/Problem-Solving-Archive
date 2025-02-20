function reverseString(s) {
    try {
      s = s.split("").reverse().join("");
    } catch (e) {
      console.log(e.message);
    } finally {
      console.log(s);
    }
  }


//This is also correct but the question asks for something else so it cannot give a completely correct result.

function reverseString(s) {
    let arr = [];
    for (let x = s.length - 1; x >= 0; x--) {
        arr.push(s[x]);
    }return console.log(arr.join(''));
}


