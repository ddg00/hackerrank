import math

def hash(word, length):
    sum = 0
    for i in range(len(word)):
        sum = sum + ord(word[i])
    return sum%length

def insert_hash(tabel,val,length):
    tabel[hash(val,length)].append(val)

def insert_tabel(list_data, length):
    tabel = [[] for _ in range(55)]
    for i in range(len(list_data)):
        insert_hash(tabel,list_data[i],length)
    return tabel

def found_word(tabel, val, length):
    for i in range(len(tabel[hash(val, length)])):
        if val == tabel[hash(val, length)][i]:
            del tabel[hash(val, length)][i]
            return True

    return False

def ransom_note(magazine, ransom):
    length = 55
    hash_tabel = insert_tabel(magazine, length)
    status = True
    for i in range(len(ransom)):
        status = found_word(hash_tabel,ransom[i],length)
        if not status:
            break

    return status

m, n = map(int, input().strip().split(' '))
magazine = input().strip().split(' ')
ransom = input().strip().split(' ')
answer = ransom_note(magazine, ransom)
if(answer):
    print("Yes")
else:
    print("No")
