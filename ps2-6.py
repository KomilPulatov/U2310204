def right_rotate(list, n):
    n = n % len(list)
    return list[-n:] + list[:-n]


list = [2, 1, 2, 3, 1, 9]
n = 2
rotated_list = right_rotate(list, n)
print(rotated_list)
