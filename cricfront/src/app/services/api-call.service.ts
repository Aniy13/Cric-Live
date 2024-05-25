import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _httpClient:HttpClient) { }

  getAllMatches(){
    return this._httpClient.get(`${environment.apiUrl}/match`)

  }
  getLiveMatches(){
    return this._httpClient.get(`${environment.apiUrl}/match/live`)

  }
  getPointTable(){
    return this._httpClient.get(`${environment.apiUrl}/match/point-table`)

  }
}
