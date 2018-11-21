import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MainService{
    http: any;
    baseUrl: string;

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'https://stats.nba.com/stats/';
    }

    getScoreBoardByDate(date){
        return this.http.get(this.baseUrl + 'scoreboard/?GameDate=' + date + '&LeagueID=00&DayOffset=0',
            { 'Content-Type': 'application/json' })
            .map(res => res.json());
    }

    getTeamInfoCommon(teamId){
        return this.http.get(this.baseUrl + 'teaminfocommon/?TeamID=' + teamId + '&Season=2018-19&SeasonType=Regular Season&LeagueID=00',
            { 'Content-Type': 'application/json' })
            .map(res => res.json());
    }
}