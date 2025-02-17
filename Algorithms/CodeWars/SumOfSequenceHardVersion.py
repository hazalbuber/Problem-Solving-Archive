def sequence_sum(begin_number, end_number, step):
    if (step > 0 and begin_number > end_number) or (step < 0 and begin_number < end_number):
        return 0 # Invalid input

    # Find the last term: largest possible number that does not exceed end_number
    last_term = begin_number + ((end_number - begin_number) // step) * step

    # Find the number of terms
    num_terms = ((last_term - begin_number) // step) + 1

    # Mathematical sum formula
    return num_terms * (begin_number + last_term) // 2