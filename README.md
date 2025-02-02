   # Frontend React Test Task
 ## Technical requirements
  - Use typescript + react + react context
  - Do not use: redux, redux toolkit, styled-components, UI libraries, css-in-js
  - All code should be inside your repo on Github.
  - Deploy production build to Github pages, Heroku, etc.
  
## Arguments

From the user, you expect to receive numbers ```M```, ```N```, and ```X```.
```M``` range from 0 to 100
```N``` range from 0 to 100
Limits for ```X``` must be calculated based on ```M``` and ```N``` values (details below)

## Data

Create matrix ```M*N```, where ```M``` is the number of rows and ```N``` is the number of columns.
In each cell of the matrix should be an object with a structure

```
type CellId = number; // unique value for all table
type CellValue = number; // three digit random number

type Cell = {
  id: CellId,
  amount: CellValue
}
```

## As a user I should be able to see all data in the table view

Show all generated data in the table with good UX.

- Each cell contains the previously generated ```amount``` 
- Add an additional column to the table with values sum for each row
- Add an additional row to the table with the 50 percentile value for each column
#### Example
|  | Cell values N = 1 | Cell values N = 2 | Sum values |
| ------ | ------ | ------ | ------ |
| Cell Value M = 1 | 1 | 5 | 6 |
| Cell Value M = 2 | 2 | 2 | 4 |
| 50th percentile | 1.5 | 3.5 | |

## As a user I should be able to increase the value in the cell
Increate the amount in the cell by 1 when user press on it. Recalculate average and sum values.

## As a user I should be able to find the nearest by value cells
Highlight ```X```  cells where ```amount``` is closest to the amount of hovered cell.
#### Example

If ```X = 5``` you should find in the matrix 5 cells with amount nearest to the value in the hovered cell and change background for those cells.

## As a user I should be able to see the percent of each cell in a row
When user hover on the sum cell in this row:
 - Replace amount in each cell in the row with the percent from the total value in a row
 - Build row heatmap. Add a background inside the each cell in a row which will represent the calculated percentage of the cell value from the maximum value in a row (not a percentage from a total).
#### Example
Table headings are explanatory (shouldn’t be a part of UI).
|  | Cell values N = 1 | Cell values N = 2 | Sum values |
| ------ | ------ | ------ | ------ |
| Cell Value M = 1 | 2 | 5 | 7 |
| Cell Value M = 2 | 17% | 83% | 6(Hovered) |

## As a user I should be able to remove any row
Give the ability to remove any row in the table. Sum and average values should be recalculated respectively.

## As a user I should be able to add a row
A new row should be appended at the end of the table, sum and average values should be recalculated respectively.

