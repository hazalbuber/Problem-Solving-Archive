def two_oldest_ages(ages):
    oldest = ages[0]
    second_oldest = 0  

    for age in ages[1:]:
        if age > oldest:
            second_oldest = oldest
            oldest = age
        elif age > second_oldest:
            second_oldest = age
    
    return [second_oldest, oldest]


def two_oldest_ages(ages):
    return sorted(ages)[-2:]