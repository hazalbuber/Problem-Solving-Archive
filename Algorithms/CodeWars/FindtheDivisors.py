def divisors(integer):
    arr = []

    for x in range(2,integer):
        if integer%x == 0:
            arr.append(x)
    if not arr:
        return f"{integer} is prime"
    return arr
            