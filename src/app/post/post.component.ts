import { Component ,OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title:string = "List of Posts"
 @Input() fromParent : string | undefined;
  postParentMessage:string = "message coming from post components"
  constructor() {
  }
  ngOnInit():void{

  }
}
