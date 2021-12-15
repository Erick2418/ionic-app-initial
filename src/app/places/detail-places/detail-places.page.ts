import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {AlertController} from '@ionic/angular'

import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-detail-places',
  templateUrl: './detail-places.page.html',
  styleUrls: ['./detail-places.page.scss'],
})
export class DetailPlacesPage implements OnInit {

  place:Place;

  constructor(
    private activateRouter: ActivatedRoute,
    private placeService: PlacesService,
    private router: Router,
    private alertCtrl:AlertController
  ) { }


  ngOnInit() {

    this.activateRouter.paramMap.subscribe(
      paramMap=>{
        if(!paramMap){
            // retornar a otro lado por que no le ha llegado un parametro
        }
        const recipeid = paramMap.get('placeId');
        this.place = this.placeService.getPlace(recipeid);
        console.log(this.place);
      }
    )

  }

  async deletePlace(){
    const alertElent = await this.alertCtrl.create({
      header:'Are you sure, you want to delete it?',
      message:'Be careful',
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Delete',
          handler:()=>{
            this.placeService.deletePlaces(this.place.id);
            this.router.navigate(['./places'])
          }
        }
      ]
    })

    await alertElent.present();


  }



}
