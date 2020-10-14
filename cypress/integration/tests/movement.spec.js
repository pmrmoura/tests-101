context('Movement', () => {
  beforeEach(() => {
    cy
      .visit('https://pmrmoura.github.io/tetris-101/')
    cy
      .get('#start-tetris-game').click();
  })

  it('Move tetromino left command', () => {
    let x = -1;
    cy
      .get('.square')
      .then(($squareList) => {
        let startCol = -1;
  
        for (let row = 0; row < 20; row++) {
  
          for (let col = 0; col < 10; col++) {
            console.log($squareList[col])
            if ($squareList[col].classList.contains('tetromino')) {  
              if (startCol > col || startCol === -1) {
                startCol = col
              }
  
              x = startCol
              console.log(x, 'x cordinate')
            }
          }
        }
      })
  
    cy
      .get('body')
      .type('{leftarrow}');
  
    cy
      .get('.square')
      .then(($squareList) => {
        let startCol = -1;
        for (let row = 0; row < 20; row++) {
  
          for (let col = 0; col < 10; col++) {
            if ($squareList[col].classList.contains('tetromino')) {
              if (startCol > col || startCol === -1) {
                startCol = col
              }
            }
          }
  
        }
        expect(startCol).to.equal(x - 1)
      })
  
  })
})