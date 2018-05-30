import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 allowNewServer = false;
 serverCreated = 'No server created yet' ;
 usersServer = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }


  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = 'Congrats! New Server has been created' ;
  }

  userServerName(event: any) {
      this.usersServer = event.target.value;
  }

}
