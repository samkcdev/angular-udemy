import { Component } from '@angular/core';

// the component decorator that enhances the class
@Component ({
    selector : 'app-server',
    templateUrl : './server.component.html'
})

export class ServerComponent{
    serverId = 10;
    serverStatus = 'Online';
    servers = ['serverOne', 'serverTwo', 'serverThree', 'serverFour']

}
