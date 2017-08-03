import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int m = in.nextInt();
        int grid[][] = new int[n][m];
        int largest = 0;
        int current = 0;
        boolean visited[][] = new boolean[n][m];
        for(int grid_i=0; grid_i < n; grid_i++){
            for(int grid_j=0; grid_j < m; grid_j++){
                grid[grid_i][grid_j] = in.nextInt();
            }
        }
        for(int grid_i=0; grid_i < n; grid_i++){
            for(int grid_j=0; grid_j < m; grid_j++){
                current = countRegion(grid, visited, grid_i, grid_j);
                if(current > largest) largest = current;
            }
        }
        System.out.print(largest);
    }

    static int countRegion(int[][] grid, boolean[][] visited, int r, int c){
        int count = 0;
        if(visited[r][c]) return count;
        visited[r][c] = true;
        if(grid[r][c] == 1){
            count++;
        }else{
            return count;
        }

        int r_l = grid.length-1;
        int c_l = grid[0].length-1;

        if(r-1 >= 0){
            if(c-1 >= 0) count += countRegion(grid, visited, r-1, c-1);
            if(c+1 <= c_l) count += countRegion(grid, visited, r-1, c+1);
            count += countRegion(grid, visited, r-1, c);
        }
        if(c-1 >=0){
            if(r+1 <= r_l) count += countRegion(grid, visited, r+1, c-1);
            count += countRegion(grid, visited, r, c-1);

        }
        if(r+1 <= r_l){
            if(c+1 <= c_l) count += countRegion(grid, visited, r+1, c+1);
            count += countRegion(grid, visited, r+1, c);
        }
        if(c+1 <= c_l) count += countRegion(grid, visited, r, c+1);

        return count;
    }
}
