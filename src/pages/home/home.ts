import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/umd';
import { MainService } from '../../app/services/main.service';
import { ImageService } from '../../app/services/image.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;
  cityUrl: any;
  constructor(public navCtrl: NavController, private mainService: MainService, private imageService: ImageService) {

  }

  getCurrentDate(){
    return '11/20/2018';
  }

  ngOnInit(){
    this.mainService.getScoreBoardByDate(this.getCurrentDate()).subscribe(response => {
     this.items = response;
    });
  }

  getCityImageUrlByName(){
    this.imageService.getCityInfo('toronto').subscribe(response => {
      this.cityUrl = response;
     });
  }

}
