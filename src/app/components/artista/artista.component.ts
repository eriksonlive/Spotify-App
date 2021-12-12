import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  @Input() itemAtista: any = {};
  public detalleArtista : any = {};
  public artista: any = {};
  public tracks: any[] = [];
  loading: boolean = true;

  constructor(private activarRuta: ActivatedRoute, private artistasServices: ServicesService) {
    this.activarRuta.params.subscribe(
        params => {
          this.getArtista(params['id']);
          this.getTopTraks(params['id']);
    });
  }
  
  getArtista(id: string){
    this.artistasServices.getArtista(id).subscribe(
      artista => {
        this.artista = artista;
        this.loading = false;
      }
    );
  }

  getTopTraks(id: string){
    this.artistasServices.getTopTracks(id).subscribe(
      tracks => {
        this.tracks = tracks;
        console.log(this.tracks);
      }
    );
  }

  ngOnInit(): void {}

}
