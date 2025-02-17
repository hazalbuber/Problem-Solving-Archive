def factorial(n):
    if n < 0 or n > 12:
        raise ValueError("Input must be between 0 and 12 (inclusive)")
    
    result = 1
    for x in range(1, n + 1):
        result *= x
    return result

#Also this solution is correct but the question wants us to use ValueError in Python

def factorial(n):
    result = 1
    if n < 0 or n > 12:
        return -1
    for x in range(1, n + 1):
        result *= x
    return result