def maskify(cc):
    length = len(cc) 
    if length <= 4:   
        return cc
    return "#" * (length - 4) + cc[-4:]