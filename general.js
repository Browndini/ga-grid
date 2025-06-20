
const countCellsInNeighborhood = (grid, N) => {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const height = grid.length;
  const width = grid[0].length;

  const positiveCells = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (grid[y][x] > 0) {
        positiveCells.push([y, x]);
      }
    }
  }

  if (positiveCells.length === 0) {
    return 0;
  }

  const neighborhood = new Set();

  for (const [yPos, xPos] of positiveCells) {
    // checks all cells in the neighborhood of the positive cell
    for (let dy = -N; dy <= N; dy++) {
      const y = yPos + dy;
      if (y < 0 || y >= height) {
        continue;
      }

      const remainingDist = N - Math.abs(dy);
      for (let dx = -remainingDist; dx <= remainingDist; dx++) {
        const x = xPos + dx;
        if (x >= 0 && x < width) {
          neighborhood.add(`${y},${x}`);
        }
      }
    }
  }

  return neighborhood.size;
};


const main = () => {
  // Test Case 1: Single positive value
  const grid1 = [
    [-1, -1, -1],
    [-1,  1, -1],
    [-1, -1, -1]
  ];
  const N1 = 1;
  console.log(`Test Case 1: Expected: 5, Actual: ${countCellsInNeighborhood(grid1, N1)}`);

  // Test Case 2: large single positive value
  const grid2 = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1,  1, -1, -1, -1, -1, -1], // positive
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  ];
  const N2 = 3;
  console.log(`Test Case 2: Expected: 25, Actual: ${countCellsInNeighborhood(grid2, N2)}`);

  // Test Case 3: N = 0
  const grid3 = [[1]];
  const N3 = 0;
  console.log(`Test Case 3: Expected: 1, Actual: ${countCellsInNeighborhood(grid3, N3)}`);

  // Test Case 4: No positive values
  const grid4 = [
    [-1, -2],
    [-3, -4]
  ];
  const N4 = 5;
  console.log(`Test Case 4: Expected: 0, Actual: ${countCellsInNeighborhood(grid4, N4)}`);

  // Test Case 5: Entire grid is the neighborhood
  const grid5 = [
    [1, -1],
    [-1, -1]
  ];
  const N5 = 2;
  console.log(`Test Case 5: Expected: 4, Actual: ${countCellsInNeighborhood(grid5, N5)}`);

  // Test Case 6: Empty grid
  const grid6 = [];
  const N6 = 2;
  console.log(`Test Case 6: Expected: 0, Actual: ${countCellsInNeighborhood(grid6, N6)}`);

  // Test Case 7: large close positive values
  const grid7 = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1,  1, -1, -1, -1, -1, -1], // positive
    [-1, -1, -1,  1, -1, -1, -1, -1, -1, -1, -1], // positive
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  ];
  const N7 = 2;
  console.log(`Test Case 7: Expected: 22, Actual: ${countCellsInNeighborhood(grid7, N7)}`);

  // Test Case 8: large two positive values
  const grid8 = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1,  1, -1, -1], // positive
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1,  1, -1, -1, -1, -1, -1, -1], // positive
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  ];
  const N8 = 2;
  console.log(`Test Case 8: Expected: 26, Actual: ${countCellsInNeighborhood(grid8, N8)}`);
}

main();