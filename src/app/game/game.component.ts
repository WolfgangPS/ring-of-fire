import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { Game } from '../../models/game';
import { GameListService } from '../firebase-services/game-list.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  pickCardAnimation = false;
  currentCard: string = '';
  game: any;

  constructor(private gameService: GameListService, public dialog: MatDialog) { }

  // getList(){
  //   // debugger
  //   return this.gameService.gameList;
    
  // }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    debugger
    console.log(this.gameService.gameList);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      ;
      console.log('New card:' + this.currentCard)
      console.log('Game is', this.game)

      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1200);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }

    });
  }

}
