def dont_give_me_five(start, end):
    count = 0
    for x in range(start, end + 1):
        if '5' not in str(x): 
            count += 1
    return count