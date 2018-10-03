import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/*@Injectable({

  providedIn: 'root'
})*/
@Injectable()

export class DashboardDataService {
    data : any = {};
    constructor(private http: HttpClient) {}
  
    getUser() {
    console.log("Hello");
    return this.http.get(environment.apiUrl+'/statistics').pipe(
    //map((res:Response) => res.json()));
    map(res => res ));
    }

    getdata()
    {
      this.getUser().subscribe( data => {
      console.log(data);
      this.data = data
    })
    }


    
}



 

 
