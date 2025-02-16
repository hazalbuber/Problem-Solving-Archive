def divisible_by(numbers, divisor):
    arr = []
    
    for x in numbers:
        if x%divisor == 0:
            arr.append(x)
    return arr