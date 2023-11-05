def count_distinct_elements(list):
    distinct_elements = set(list)
    return len(distinct_elements)


list = [2, 1, 2, 3, 1, 9]
number_distinct_elements = count_distinct_elements(list)
print("Number of distinct elements: ", number_distinct_elements)
