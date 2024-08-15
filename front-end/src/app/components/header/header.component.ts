import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-header',
    styleUrl: './header.component.css',
    templateUrl: './header.component.html',
    imports:[RouterLink],
    standalone: true
})

export class HeaderComponent {

}