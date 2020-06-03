import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./model/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http:HttpClient) {}

    login(email: String, password: String): Observable<User> {
        return this.http.post<User>('/api/login', {email, password});
    }
}