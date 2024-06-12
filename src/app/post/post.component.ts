import { Component ,OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title:string = "List of Posts"
  postParentMessage:string = "message coming from post components"
  childMessage:string="From child Components";

  @Input() fromParent : string | undefined;

  constructor() {
  }
  ngOnInit():void{

  }
}
