def get_average(marks):
    sum_num = sum(marks)
    i = len(marks)
    result =  round(sum_num//i)
    return  result
 

def get_average(marks):
    return sum(marks) // len(marks)