import math

p = int(input().strip())
for a0 in range(p):
    prime = 'Prime'
    n = int(input().strip())
    if n == 1:
        print('Not prime')
    elif n == 2:
        print('Prime')
    else:
        for i in range(2, math.ceil(math.sqrt(n))+1):
            if (n % i) == 0:
                prime = 'Not prime'
        print(prime)
