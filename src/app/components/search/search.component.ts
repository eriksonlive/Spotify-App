import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public artista: any = {}; 
  public loading: boolean = true;

  constructor(private spotify: ServicesService) {}

  ngOnInit(): void {}

  buscar(termino: string){
    this.loading = true;
    this.spotify.getArtistas(termino).subscribe(
      result =>{
        this.artista = result;
        console.log(this.artista);
        this.loading = false;
      }
    );
  }

}
