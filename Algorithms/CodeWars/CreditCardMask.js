function maskify(cc) {
  
    let length = cc.length
    if (length <= 4){
        return cc
    }   
    return "#".repeat(length - 4) + cc.slice(-4);

}

