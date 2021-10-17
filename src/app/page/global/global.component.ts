import { Component, OnInit } from '@angular/core';
import { NewProjectModel, Img } from './models/new-project-model'; 

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
  public newProjectModel!: NewProjectModel;

  constructor() {
    this.newProjectModel = {
      nav:{
        title: 'liverymakers',
        logo: {
          src:'https://i.imgur.com/f3SpBTl.png',
          alt:'logo Light',
        }
      },
      info: {
        text:'Esta es una recopilación de los mejores liveries votados por la comunidad. Podemos encontrar liveries basadas en diseños de la F1, en la Formula Drift, en RallyCross o Campeonatos de GT3 y GT4.',
      },
      photos: {
      title: 'TOP 10 LIVERIES OF THE WEEK ✔️',
      images: [
        {
        src:'https://i.imgur.com/ADCvY7I.png',
        alt:'Lamborghini Diablo Daigo Sato (Monster Team)'
        
      },
      { 
        src:'https://i.imgur.com/s7QcQ0J.png',
        alt:'Nissan GTR Baggsy (Monster Team)' 
      },
      { 
        src:'https://i.imgur.com/U6DZliR.png',
        alt:'Ford Mustang RTR Vaughn Gittin JR (Monster Team)' 
      },
      { 
        src:'https://i.imgur.com/EYElpon.png',
        alt:'Dodge Viper .... (Oracle Team)' 
      },
      { 
        src:'https://i.imgur.com/sjM18WN.png',
        alt:'Toyota RallyCross Fredrick Asboo' 
      },
      { 
        src:'https://i.imgur.com/SMpqCkH.png',
        alt:'VW RallyCross' 
      },
      { 
        src:'https://i.imgur.com/7RQTWxB.png',
        alt:'Ford GT F1 Williams livery' 
      },
      { 
        src:'https://i.imgur.com/nAvaWB7.png',
        alt:'Ferrari 358 F1 Ferrari livery' 
      },
      { 
        src:'https://i.imgur.com/hK3VqJa.png',
        alt:'Audi TT GT4 Leopard Team' 
      },
      { 
        src:'https://i.imgur.com/EamfYjy.png',
        alt:'BMW Z4 GT3 ... livery' 
      }
      ],
    }
  }

}
ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
