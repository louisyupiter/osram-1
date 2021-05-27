import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Penjual } from '../models/Penjual';
import { SerialNumber } from '../models/SerialNumber';
import { Pembeli } from '../models/Pembeli';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    createQrcode(): any {
        return this.http
            .post<any>(`${environment.baseUrl}code/create`, null)
            .subscribe(
                (res) => {
                    console.log(res);
                    // this.router.navigate([`/home`]);
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    getAllunPrintQrcode(): Observable<any[]> {
        return this.http.get<any>(`${environment.baseUrl}code/`);
    }

    printQrcode(): Observable<any[]> {
        return this.http.get<any>(`${environment.baseUrl}code/print`);
    }

    validateQrcode(serialnumber: SerialNumber): Observable<any[]> {
        return this.http
            .post<any>(`${environment.baseUrl}code/validate`, serialnumber);
    }

    getAllPenjual(): any {
        return this.http
            .get<any>(`${environment.baseUrl}penjual`)
            .subscribe(
                (res) => {
                    console.log(res);
                    // this.router.navigate([`/home`]);
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    getPenjual(idqrcode: string): Observable<any[]> {
        return this.http
            .get<any>(`${environment.baseUrl}penjual/${idqrcode}`);
    }

    updatePenjual(idqrcode: string, penjual: Penjual): Observable<any[]> {
        return this.http
            .post<any>(`${environment.baseUrl}penjual/${idqrcode}`, penjual);
    }

    getAllPembeli(): Observable<any[]> {
        return this.http.get<any>(`${environment.baseUrl}pembeli`);
    }

    getPembeli(idqrcode: string): Observable<any[]> {
        return this.http.get<any>(`${environment.baseUrl}pembeli/${idqrcode}`);
    }

    updatePembeli(idqrcode: string, pembeli: Pembeli): Observable<any[]> {
        return this.http
            .post<any>(`${environment.baseUrl}pembeli/${idqrcode}`, pembeli);
    }
}
