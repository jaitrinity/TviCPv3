import { Injectable } from '@angular/core';
import { Http , RequestOptions , Response , Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Constant } from "../constant/Constant";

@Injectable({ providedIn: 'root'})
export class AirtelServices{
    private serviceEndPoint;
    constructor(private http : Http){
        this.serviceEndPoint = Constant.serverURL;
    }

    public anyPostRequest(serviceName: string,jsonData : any){
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append("Access-Control-Allow-Origin", "*");
        let options = new RequestOptions({ headers:headers });
        return this.http.post(this.serviceEndPoint+''+serviceName,jsonData,options)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}