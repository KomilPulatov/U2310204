def count_frequency(lst):
    frequency_dictionary = {}
    for item in lst:
        if item in frequency_dictionary:
            frequency_dictionary[item] += 1
        else:
            frequency_dictionary[item] = 1
    for i in range(max(lst) + 1):
        if i not in frequency_dictionary:
            frequency_dictionary[i] = 0

    data = list(frequency_dictionary.keys())
    data.sort()
    sorted = {j: frequency_dictionary[j] for j in data}
    return sorted


lst = [2, 1, 2, 3, 1, 9]
frequency_dictionary = count_frequency(lst)
print(frequency_dictionary)
