import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Penjual } from '../models/Penjual';
import { SerialNumber } from '../models/SerialNumber';
import { Pembeli } from '../models/Pembeli';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient, private router: Router) { }

    createQrcode(): any {
        return this.http
            .post<any>(`${environment.baseUrl}code/create`, null)
            .subscribe(
                (success) => {
                    console.log(success);
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

    validateQrcode(serialnumber: SerialNumber): any {
        return this.http
            .post<any>(`${environment.baseUrl}code/validate`, serialnumber)
            .subscribe(
                (success) => {
                    console.log(success);
                    // this.router.navigate([`/home`]);
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    getAllPenjual(): any {
        return this.http
            .get<any>(`${environment.baseUrl}penjual`)
            .subscribe(
                (success) => {
                    console.log(success);
                    // this.router.navigate([`/home`]);
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    getPenjual(idqrcode: string): any {
        return this.http
            .get<any>(`${environment.baseUrl}penjual/${idqrcode}`)
            .subscribe(
                (success) => {
                    console.log(success);
                    // this.router.navigate([`/home`]);
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    updatePenjual(idqrcode: string, penjual: Penjual): any {
        return this.http
            .post<any>(`${environment.baseUrl}penjual/${idqrcode}`, penjual)
            .subscribe(
                (success) => {
                    console.log(success);
                    // this.router.navigate([`/home`]);
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    getAllPembeli(): any {
        return this.http
            .get<any>(`${environment.baseUrl}pembeli`)
            .subscribe(
                (success) => {
                    console.log(success);
                    // this.router.navigate([`/home`]);
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    getPembeli(idqrcode: string): any {
        return this.http
            .get<any>(`${environment.baseUrl}pembeli/${idqrcode}`)
            .subscribe(
                (success) => {
                    console.log(success);
                    // this.router.navigate([`/home`]);
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    updatePembeli(idqrcode: string, pembeli: Pembeli): any {
        return this.http
            .post<any>(`${environment.baseUrl}pembeli/${idqrcode}`, pembeli)
            .subscribe(
                (success) => {
                    console.log(success);
                    // this.router.navigate([`/home`]);
                },
                (err) => {
                    console.log(err);
                }
            );
    }
}
