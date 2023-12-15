import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogAddPlayerComponent } from './dialog-add-player/dialog-add-player.component';
import { GameComponent } from './game/game.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { PlayerComponent } from './player/player.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    DialogAddPlayerComponent,
    GameComponent,
    GameInfoComponent,
    PlayerComponent,
    StartScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-6c8de","appId":"1:691290617953:web:51018baf3c674fb9551220","storageBucket":"ring-of-fire-6c8de.appspot.com","apiKey":"AIzaSyBJSILRbscqiHqm5YIyYrpod44TsoLIHdw","authDomain":"ring-of-fire-6c8de.firebaseapp.com","messagingSenderId":"691290617953"})),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
