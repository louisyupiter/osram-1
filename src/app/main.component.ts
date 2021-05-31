import { Component } from '@angular/core';
// import { NavigationEnd, Router } from '@angular/router';
// import { filter } from 'rxjs/operators';

// declare var gtag: any;

@Component({
    selector: 'app-main',
    template: `<router-outlet></router-outlet>`,
    styleUrls: ['./main.component.scss'],
})

export class MainComponent {
    // constructor(private router: Router) {
    //     const navEndEvent$ = this.router.events.pipe(
    //         filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    //     );
    //     navEndEvent$.subscribe((e: NavigationEnd) => {
    //         gtag('config', 'G-Y68Z7XVQQG', {
    //             page_path: e.urlAfterRedirects
    //         });
    //     });
    // }
}
