import { Component, OnInit, DoCheck } from '@angular/core';
import { DataService } from '../../core/data.service';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
	public cartList: any = [];
	public count: number;
  public isVisible = false;
  public isLoggedIn: boolean = false;

  constructor(private af: AngularFire, private router: Router,private dataService: DataService){

    var self = this;
     af.auth.subscribe(user => {
            if(user){
               self.isLoggedIn = true;
            }else{
              self.router.navigate['/home'];
            }
        });
  }

  ngDoCheck() {
  	// this.cartList = this.dataService.getCartItems();

  	this.count = this.dataService.getTotalCartItems();

 //  	if(this.cartList.length > 0) {
	//   	this.count = this.cartList.reduce( (a, b) => a.qty + b.qty);
	// }

  }
  handleNotificationClick(e){
    this.isVisible = !this.isVisible;
  }

  signup() {
      this.router.navigate(['/signup']);
  }

  logout(){
  console.log("S");
      //this.af.auth.logout().then((d)=> console.log("E",d)).catch((e)=>console.log(e.message));
      //this.router.navigate['home'];
      this.af.auth
    // You only want unathenticated states:
    .filter((authState) => !authState)
    // You only want the first unathenticated state:
    .first()
    // You should now be able to navigate:
    .subscribe(() => this.router.navigate(['']));
    // The composed observable completes, so there's no need to unsubscribe.
  this.af.auth.logout();
  }
}
