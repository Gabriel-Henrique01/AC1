import { booleanAttribute, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-playlist',
  styleUrl: './playlist.css',
  templateUrl: './playlist.html',
})
export class Playlist {
  cor = 'green';
  digitou = '';
  reproduzindo = false;
  musicas: string[] = ['Expresso', 'Maps', 'Baby', 'Beat It', 'Animals'];
  musica_sel: string = '';

  curtida: number = 0;

  incrementar() {this.curtida++}


  adicionarMusica(event: any) {
    this.musicas.push(event.target.value);
    event.target.value = '';


  }
}
