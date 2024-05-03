import { Injectable } from '@angular/core';
import { Http , RequestOptions , Response , Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Constant } from '../constant/Constant';

@Injectable()
export class CreateNBSService{
    private serviceEndPoint;
    private phpServiceEndPoint;
    constructor(private http:Http){
        this.serviceEndPoint = Constant.serverURL;
        this.phpServiceEndPoint = Constant.phpServerURL;
    }

    public getTVISiteIdCircleName(jsonData:  any) {
        return this.http.post(this.phpServiceEndPoint+'getTVISiteIdCircleName.php',jsonData)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public saveNBSDetails(jsonData : any){
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append("Access-Control-Allow-Origin", "*");
        let options = new RequestOptions({ headers:headers });
        return this.http.post(this.serviceEndPoint+'saveNBSDetails',jsonData,options)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getNoOfList() {
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append("Access-Control-Allow-Origin", "*");
        let options = new RequestOptions({ headers:headers });
        return this.http.get(this.serviceEndPoint+"getNoOfList",options)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public uploadFile(jsonData:  any) {
        return this.http.post(this.phpServiceEndPoint+'uploadSRExcel.php',jsonData)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public checkIsAlreadyExistSiteIdAsNewTenent(jsonData:  any) {
        return this.http.post(this.phpServiceEndPoint+'booleanQuery.php',jsonData)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getAutoPopUp() {
        return this.http.get(this.phpServiceEndPoint+'getAutoPopUp.php')
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public generateGraph(jsonData:  any) {
        return this.http.post(this.phpServiceEndPoint+'generateGraph.php',jsonData)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}