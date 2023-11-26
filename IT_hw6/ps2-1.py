def findIndex(word, letter):
    for i in range(len(word)):
        if word[i].lower() == letter.lower():
            return i
    return -1


word = input('Enter your word: ')
letter = input('Enter the letter: ')

print('Position of the letter is:', findIndex(word, letter))
