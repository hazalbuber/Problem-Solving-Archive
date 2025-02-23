# Enter your code here. Read input from STDIN. Print output to STDOUT
n = int(input())
for x in range(n):
    s = input()
    print("".join(s[::2]), "".join(s[1::2]))