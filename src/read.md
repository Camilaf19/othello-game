type Posicion = [number, number]

 abstract class Ficha {
  constructor (
    public posicion: Posicion //tipo tupla
   public color: string) {}
  
  abstract calculaMovimientos(): Posicion[];
  mover(next: Posicion) {
    this.posicion = next
  }
  
}

class Peon extends Ficha {
  constructor (
    public posicion: Posicion,
    public color: string
  ) {
    super(posicion, color);
  }
  
  calculaMovimientos(tablero: Tablero): Posicion[] {
    if (this.color === 'negro') {
      [this.posicion[0], this.posicion[1] -1]
    }
      
  }
 
}


class Tablero {
  celdas:Celda[]
}
class Celda {
  posicion:[number, number] 
  color: string
}
*/


      /*    if (row >= 0 && row < 8 && col >= 0 && col < 8) {
        let adjacentCell = Board.cells[row][col] } */