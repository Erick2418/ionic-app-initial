import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from './places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  
  places =[];

  constructor(
    private placeService:PlacesService,
    private router:Router
  ) { }

  ngOnInit() { // solo se ejecuta una vez cuando el proyecto se carga
    this.places = this.placeService.getPlaces();
  }
  // lifecycle
  ionViewWillEnter(){ // se ejcuta cada vez q se carga la pagina 
    this.places = this.placeService.getPlaces();
  }

  addNewPlace(){
    console.log('hola')
    this.router.navigate(['./new-place'])
  }

}
