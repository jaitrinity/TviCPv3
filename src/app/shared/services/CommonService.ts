import { Injectable } from '@angular/core';
import { Http , RequestOptions , Response , Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Constant } from '../constant/Constant';

@Injectable()
export class CommonService{
    private serviceEndPoint;
    private phpServiceEndPoint;
    constructor(private http:Http){
        this.serviceEndPoint = Constant.serverURL;
        this.phpServiceEndPoint = Constant.phpServerURL;
    }

    public getNoOfList() {
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append("Access-Control-Allow-Origin", "*");
        let options = new RequestOptions({ headers:headers });
        return this.http.get(this.serviceEndPoint+"getNoOfList",options)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getAllEmployeeList(){
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append("Access-Control-Allow-Origin", "*");
        let options = new RequestOptions({ headers:headers });
        return this.http.get(this.serviceEndPoint+"getAllEmployeeList",options)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public actionOnTableByActionType(jsonData:  any,actionType : string) {
        return this.http.post(this.phpServiceEndPoint+'actionOnTable.php?actionType='+actionType,jsonData)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getComplainList(jsonData:  any) {
        return this.http.post(this.phpServiceEndPoint+'getComplainList.php',jsonData)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public submitComplain(jsonData : any) {
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append("Access-Control-Allow-Origin", "*");
        let options = new RequestOptions({ headers:headers });
        return this.http.post(this.serviceEndPoint+'submitComplain',jsonData,options)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}