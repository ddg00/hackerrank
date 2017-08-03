n = int(input().strip())
a = list(map(int, input().strip().split(' ')))

swap_total = 0
while True:
    swap_time = 0

    for i in range(len(a)-1):
        if a[i] > a[i+1]:
            a[i], a[i+1] = a[i+1], a[i]
            swap_time = swap_time + 1

    swap_total = swap_total + swap_time

    if swap_time == 0:
        break

print('Array is sorted in %s swaps.' % swap_total)
print('First Element: %s' % a[0])
print('Last Element: %s' % a[len(a)-1])
