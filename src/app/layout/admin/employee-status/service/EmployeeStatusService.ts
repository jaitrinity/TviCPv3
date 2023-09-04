import { Injectable } from '@angular/core';
import { Http , RequestOptions , Response , Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Constant } from 'src/app/shared/constant/Constant';

@Injectable()
export class EmployeeStatusService{
  
    private serviceEndPoint;
    constructor(private http:Http){
        this.serviceEndPoint = Constant.serverURL;
    }

    public getAllEmployeeList(){
        this.serviceEndPoint = Constant.serverURL+'getAllEmployeeList';
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append("Access-Control-Allow-Origin", "*");
        let options = new RequestOptions({ headers:headers });
        return this.http.get(this.serviceEndPoint,options)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public activeOrDeactiveEmployee(sendJson : any) {
        this.serviceEndPoint = Constant.serverURL+'activeOrDeactiveEmployee';
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append("Access-Control-Allow-Origin", "*");
        let options = new RequestOptions({ headers:headers });
        return this.http.post(this.serviceEndPoint, sendJson, options)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public saveEmployeeDetails(sendJson: any) {
        this.serviceEndPoint = Constant.serverURL+'saveEmployeeDetails';
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append("Access-Control-Allow-Origin", "*");
        let options = new RequestOptions({ headers:headers });
        return this.http.post(this.serviceEndPoint, sendJson, options)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}