def reverse_words(s):
    return " ".join(s.split()[::-1])

# `s.split()` -> Splits the string into a list of words.  
# `[::-1]`  -> Reverses the order of words in the list.  
# `" ".join(...)`  -> Joins the words back into a string with spaces.  