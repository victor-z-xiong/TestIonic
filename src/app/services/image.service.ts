import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class ImageService{
    http: any;
    baseUrl: string;

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'https://pixabay.com/api/?key=10756076-fd360053d1d3da2a3c30b4b4f';
    }

    getCityInfo(cityName){
        return this.http.get(this.baseUrl + '&q='+ cityName+'&image_type=photo&pretty=true',
            { 'Content-Type': 'application/json' })
            .map(res => res.json());
    }
}