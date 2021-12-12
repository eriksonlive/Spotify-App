import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() myMusic: any[] = [];

  @Output() selArtist: EventEmitter<number>;
  @Output() mostrar = new EventEmitter();

  constructor(private rutas: Router) {
    this.selArtist = new EventEmitter();
  }

  ngOnInit(): void {}

  verDato(event: any,artist: any){
    this.mostrar.emit({ artist: artist});
  }

  verArtista(artista: any){

    let idArt;

    if(artista.type === 'artist'){
      idArt = artista.id;
    } else {
      idArt = artista.artists[0].id;
    }
    this.rutas.navigate(['artist/', idArt]);
  }

}
