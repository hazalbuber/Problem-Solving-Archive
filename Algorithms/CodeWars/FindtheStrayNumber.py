def stray(arr):
    unique_num = set(arr)
    for num in unique_num:
        if arr.count(num) == 1:
            return num
