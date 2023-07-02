import { Component } from '@angular/core';
import { map } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user_list/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  logoImg = 'assets/images/logo1.png';
  userList: User[] = [];
  nbUser: number = 0;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void{
    this.userService.getUsers().pipe(map((res) => {
      const users = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          users.push({...res[key], id: key})
        }
      }
      return users;
    }))
    .subscribe((users) => {
      console.log(users);
      this.userList = users;
      this.nbUser = this.nbUser + this.userList.length;
      console.log(this.nbUser);
    });
  }

  showResult() {
    this.userService.getUsers().subscribe((res) => {
      console.log('users:', JSON.stringify(res)); // response data here
    })
    console.log(this.userList);
  }

}
