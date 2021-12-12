import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: boolean;
  mensajeError : string = "";
  music : Array<any> = [];
  error : boolean = true;

  constructor(private spotyfy: ServicesService, private rutas: ActivatedRoute) {}

  ngOnInit(): void {
    this.loading = true;
    this.error = false;
    this.spotyfy.getNewReleases().subscribe(
      data => {
        this.music = data;
        this.loading = false;
        console.log(data);
        //debugger;
      }, Error => {
        this.error = true;
        this.loading = false;
        this.mensajeError = Error.error.error.message;
      }
    );
  }
  
}
