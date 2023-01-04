import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CartService } from './services/cart.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'market';
  displ = false;
  shown = false;
  isUser = false;
  cartLentItem: number = 0;
  isAdmin: boolean = false;
  displayName:any
  constructor(
    private ath: AuthService,
    public afAuth: AngularFireAuth,
    private cs: CartService,
    private fs: AngularFirestore
  ) {}
  ngOnInit(): void {
    this.afAuth.user.subscribe((user) => {
      if (user) {
        this.isUser = true;
        this.displayName = user.displayName;
        this.issAdmin();
        console.log('we have user signed in ');
      } else {
        this.isUser = false;
        this.displayName = ""
        console.log('No user');
      }
    });

   this.displayName= this.ath.auth.currentUser?.displayName

    this.cs.getLength().subscribe((res) => {
      console.log(res.length);
      this.getLn(res.length);
    });
  }
  getLn(len: number) {
    console.log('The length is : ' + len);
    this.cartLentItem = len;
    console.log(this.cartLentItem);
  }
  logOut() {
    this.issAdmin();
    this.ath.signout().then(() => console.log('DONE SINGEDOUT'));
  }
  issAdmin() {
    // this function to guard admin route
    this.afAuth.user.subscribe((res) => {
      console.log();
      const admin = res?.uid == 'J9TtDoNAJIThFrpfMGdxJuSplpg1';
      if (admin) {
        this.isAdmin = admin;
        console.log(this.isAdmin);
      } else {
        console.log('This is normal user ');
        this.isAdmin = false;
      }
    });
  }
}
