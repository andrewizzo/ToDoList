import { NgModule } from "@angular/core";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { HomeComponent } from "../components/home/home.component";
import { NavbarComponent } from "../components/navbar/navbar.component";

@NgModule({
    declarations:[NavbarComponent,DashboardComponent,HomeComponent],
    imports:[],
    exports:[NavbarComponent,DashboardComponent,HomeComponent]
})
export class SharedModule{}