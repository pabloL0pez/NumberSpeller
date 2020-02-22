import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

    /**
     * Navigates to the given route.
     * @param {string} route the route name
     */
    navigateToRoute(route: string) {
        this.router.navigateByUrl(`${route}`, {relativeTo: this.activatedRoute});
    }
}