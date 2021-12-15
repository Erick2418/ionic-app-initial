import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.page.html',
  styleUrls: ['./add-place.page.scss'],
})
export class AddPlacePage implements OnInit {

  constructor(
    private placeService:PlacesService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  saveNewPlace(title, imgageURL){
    this.placeService.addPlaces(title.value, imgageURL.value);
    this.router.navigate(['./places']);
  }

}
