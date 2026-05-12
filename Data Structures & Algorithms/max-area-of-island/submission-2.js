class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;

        // for each node, must check neighors 
        const bfs = (row,col) => {
            let thisArea = 0;
            // constant of all possible neighbors (directions)
            // right, down, top, left
            const dir = [[0,1],[-1,0],[1,0],[0,-1]];
            // initialize a queue to keep track of unvisited land node and its land neighbors
            const q = [[row,col]];
            grid[row][col] = 0; // mark start as visited

            while (q.length > 0) {
                let [r,c] = q.shift();
                thisArea++; 
                
                dir.forEach( ([dr, dc]) => {
                    // if the travel direction is in bound and the value is land, add to q
                    let nr = r + dr;
                    let nc = c + dc;
                    if (
                        nr >= 0 && 
                        nr < grid.length &&
                        nc >= 0 &&
                        nc < grid[0].length &&
                        grid[nr][nc] === 1
                     ) {
                        grid[nr][nc] = 0; // mark as visited before pushing
                        q.push([nr, nc]);
                    };
                });
            };
            //update maxArea after getting size of thisArea
            maxArea = Math.max(thisArea, maxArea);
        };
        // must go through each node to do the check 
        for(let i = 0; i < grid.length; i++) {
            for (let j=0; j < grid[0].length; j++ ) {
                if (grid[i][j] === 1) {
                    bfs(i,j);
                }
            }
        }
        return maxArea;
    };
};