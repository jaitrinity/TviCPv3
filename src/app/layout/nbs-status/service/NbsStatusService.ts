import { Injectable } from '@angular/core';
import { Http , RequestOptions , Response , Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import 'rxjs/Rx';
import { Constant } from 'src/app/shared/constant/Constant';

const GET_NBS_DET_CACHE = "GET_NBS_DET_CACHE";

@Injectable()
export class NbsStatusService{
  
    private serviceEndPoint;
    constructor(private http:Http){
        this.serviceEndPoint = Constant.serverURL;
    }

    public getNbsDetails(sendJson: any) {
        this.serviceEndPoint = Constant.serverURL+'getNbsDetails';
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append("Access-Control-Allow-Origin", "*");
        let options = new RequestOptions({ headers:headers });
        return this.http.post(this.serviceEndPoint, sendJson, options)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public viewSrDetails(sendJson: any) {
        this.serviceEndPoint = Constant.serverURL+'viewSrDetails';
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append("Access-Control-Allow-Origin", "*");
        let options = new RequestOptions({ headers:headers });
        return this.http.post(this.serviceEndPoint, sendJson, options)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // public getNbsDetails(sendJson: any) {
    //     this.serviceEndPoint = Constant.serverURL+'getNbsDetails';
    //     let headers = new Headers({'Content-Type':'application/json'});
    //     headers.append("Access-Control-Allow-Origin", "*");
    //     let options = new RequestOptions({ headers:headers });
    //     let response = this.http.post(this.serviceEndPoint, sendJson, options)
    //         .map((response:Response) => response.json())
    //         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    //     response.subscribe(next => {
    //         localStorage[GET_NBS_DET_CACHE] = JSON.stringify(next);
    //     });

    //     response = response.pipe(
    //         startWith(JSON.parse(localStorage[GET_NBS_DET_CACHE] || '[]'))
    //     );
    //     return response;
    // }

    public changeSrStatus(sendJson: any) {
        this.serviceEndPoint = Constant.serverURL+'changeSrStatus';
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append("Access-Control-Allow-Origin", "*");
        let options = new RequestOptions({ headers:headers });
        return this.http.post(this.serviceEndPoint, sendJson, options)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public changeBulkSrStatus(jsonData : any) {
        this.serviceEndPoint = Constant.serverURL+'changeBulkSrStatus';
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append("Access-Control-Allow-Origin", "*");
        let options = new RequestOptions({ headers:headers });
        return this.http.post(this.serviceEndPoint, jsonData, options)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}