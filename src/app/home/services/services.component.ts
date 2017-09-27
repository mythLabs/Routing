import { Component, OnInit } from '@angular/core';
import {apiService} from '../../Services/app.apiService';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  results;
  constructor(private _apiService:apiService) { }

  ngOnInit() {
      this._apiService.getData("https://reqres.in/api/users?page=2").subscribe(data => {
      this.results = data['data'];
    });
  }

}
