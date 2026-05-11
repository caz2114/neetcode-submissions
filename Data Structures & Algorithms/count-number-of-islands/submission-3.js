class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        // DFS through the grid
        const recursiveSearch = (row, col) => {
            if (grid[row][col] === "0") {
                return;
            } else {
                grid[row][col] = "0";
                if ((row + 1) < grid.length) {
                    recursiveSearch(row + 1, col);
                }
                if ((row - 1) >= 0) {
                    recursiveSearch(row - 1, col);
                }
                if ((col + 1) < grid[0].length) {
                    recursiveSearch(row, col + 1)
                }
                if ((col - 1) >= 0) {
                    recursiveSearch(row, col - 1)
                }
                return;
            }
        }

        for( let i = 0; i < grid.length; i++ ) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === "1") {

                    count++;
                    recursiveSearch(i,j)
            }            
            }
        }

        return count;
    }
}
