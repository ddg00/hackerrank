import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int s = in.nextInt();
        int hashMap[] = new int[36];
        for(int a0 = 0; a0 < s; a0++){
            int n = in.nextInt();
            countWays(n/2, hashMap);
            System.out.print(countWays(n, hashMap)+"\n");
        }

    }

    static int countWays(int s, int[] hashMap){
        int count = 0;
        if(s <= 0){
            count++;
            return count;
        }

        if(hashMap[s-1] != 0) return hashMap[s-1];

        count += countWays(s-1, hashMap);
        if(s >= 2){
            count += countWays(s-2, hashMap);
            if((s%2) > s-2) count += countWays(s%2, hashMap);
        }
        if(s >= 3){
            count += countWays(s-3, hashMap);
            if((s%3) > s-3) count += countWays(s%3, hashMap);
        }

        if(hashMap[s-1] == 0) hashMap[s-1] = count;
        return count;
    }
}
