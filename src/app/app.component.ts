import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PostComponent} from "./post/post.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'AngIntro';
  parentMessage:string = "message coming from the parent components"
  message: string | undefined;

  @ViewChild(PostComponent) childComp: any;

  constructor() {
    console.log(this.childComp)
  }

  ngAfterViewInit() {
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
  }
}
