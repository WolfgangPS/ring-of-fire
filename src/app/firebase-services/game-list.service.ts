import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, collectionData, onSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  // ############Variante mit 'collectionData'########
  // games$
  // games: any;
  // ############Variante mit 'onSnapshot'########
  
  gameList: any;
  
  unsubGames;
  unsubSingleGame;

  firestore: Firestore = inject(Firestore);

  constructor() {
    // ############Variante mit 'onSnapshot'########
    this.unsubGames = this.subGamesList(); 

    this.unsubSingleGame = onSnapshot(this.getSingleGameRef('games','0M6yLiEgDfN4ibd7irsv'),(game)=> {
      // console.log(game); Works!!!!
    });


    // ############Variante mit 'collectionData'########
    // this.games$ = collectionData(this.getGamesRef());
    // this.games = this.games$.subscribe((gamesList) => {
    //   gamesList.forEach(game => {
    //     console.log(game);
    //   });
    // })
    // this.games.unsubscribe();
  }

  subGamesList(){
    return onSnapshot(this.getGamesRef(), (gamesList) => {
      this.gameList = [];
      gamesList.forEach(game => {
        this.gameList.push(game.data());
      });
      // console.log(this.gameList); Works!!!
    });
  }

  ngonDestroy(){
    this.unsubGames();
    this.unsubSingleGame();
  }

  getGamesRef() {
    return collection(this.firestore, 'games');
  }

  getSingleGameRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}
