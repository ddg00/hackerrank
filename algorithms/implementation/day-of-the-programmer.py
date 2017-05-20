#!/bin/python

import sys

def solve(year):
    # Complete this function
    aef = 215
    feb = 28
    if (year == 1918):
        feb = feb-13
    if (year < 1918):
        if (year % 4 == 0):
            feb = 29
    elif ((year % 400 == 0) or ((year % 4 == 0)and(year % 100 !=0))) :
        feb = 29
    all = aef + feb
    date = 256 - all
    day = date
    if(date < 10) :
        day = "0{}".format(date)

    fullDate = [day, '09', year]
    return "{}.{}.{}".format(*fullDate)

year = int(raw_input().strip())
result = solve(year)
print(result)
