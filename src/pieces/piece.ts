import { BoardVector2d } from "geometry";

export class Piece {

  private readonly initialPosition: BoardVector2d;
  private position: BoardVector2d;
  private readonly playerId: number;
  private moveCounter: number;
  private direction: BoardVector2d | undefined;

  public constructor( position: BoardVector2d, playerId: number, direction: number){
    this.initialPosition = position;
    this.position = position;
    this.moveCounter = 0;
    this.direction = this.direction; 
    this.playerId = playerId;
  }
}