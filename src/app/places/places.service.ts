import { Injectable } from '@angular/core';
import {Place} from './place.model'
@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  
  private places:Place[] =[
    {
      id:'1',
      title:'Eiffel Tower',
      imageURL: 'https://c8.alamy.com/comp/P4J0HB/torre-eiffel-pars-francia-P4J0HB.jpg',
      comments:['Awesome','Wonderful exprecience']
    },
    {
      id:'2',
      title:'Statue of Liberty',
      imageURL: 'https://static.anuevayork.com/wp-content/uploads/2019/07/11084916/Como-visitar-la-Estatua-de-la-Libertad-en-Nueva-York-1500-2.jpg',
      comments:['Awesome','Wonderful exprecience']
    },
    {
      id:'3',
      title:'Statue of Liberty',
      imageURL: 'https://static.anuevayork.com/wp-content/uploads/2019/07/11084916/Como-visitar-la-Estatua-de-la-Libertad-en-Nueva-York-1500-2.jpg',
      comments:[]
    }
  ]

  constructor() { }


  
  getPlace(placeID: string){
    return {
      ...this.places.find(place=>{
        return place.id === placeID
      })
    } 
  }

  getPlaces(){
    return [...this.places]
  }

  addPlaces( title:string, imageURL:string ){
    this.places.push({
      title,
      imageURL,
      comments:[],
      id: this.places.length + 1 + ""
    });
  }

  deletePlaces( placeId:string ){
    this.places = this.places.filter(
                    place=>{
                      return place.id !== placeId
                    }
                  )
  }

    


}
