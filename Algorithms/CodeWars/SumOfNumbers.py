def get_sum(a, b):
    if a == b:
        return a
    return sum(range(min(a, b), max(a, b) + 1))