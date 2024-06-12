import {Component} from "@angular/core";


@Component({
  selector:'app-navbar',
  template:`<h1>Navbar Template</h1>
            <p>This is paragraph</p>`,
  styles:[`h1{
    color: red;
    font-size: 50px;
  }`]
})
export class NavbarComponents{

}
