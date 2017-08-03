def number_needed(a, b):
    count = 0
    A = list(a)
    B = list(b)
    for i in range(len(A)):
        get = 0
        for j in range(len(B)):
            if A[i-count] == B[j]:
                get = 1
                break

        if get == 0:
            del A[i-count]
            count = count + 1
        else:
            del B[j]

    count = count + len(B)
    return count

a = input().strip()
b = input().strip()

print(number_needed(a, b))
