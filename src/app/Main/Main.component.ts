import { Component, OnInit,HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-main',
	templateUrl: './Main.component.html',
	styleUrls: ['./Main.component.scss']
})

export class MainComponent implements OnInit {

	currentUrl	: any;
  isRtl			: any = 'ltr';


	constructor(public router : Router) { }

	ngOnInit() {
		this.router.events
			.subscribe((event) => {
				if (event instanceof NavigationEnd) {
					this.currentUrl = event.url;
					this.addRemoveHeaderClass();
					this.addRemoveFooterClass();
				}
			});
		this.currentUrl = this.router.url;
		this.addRemoveHeaderClass();
		this.addRemoveFooterClass();
  }



	/**
	  *addRemoveHeaderClass method is used to add or remove class on header.
	  */
	addRemoveHeaderClass  () {
		setTimeout(()=>{
			if((this.currentUrl != '/session/comingsoon') && (this.currentUrl != '/session/maintenance') && (this.currentUrl != '/session/login') && (this.currentUrl != '/session/signup2')) {
				if(this.currentUrl=='/'){
					document.getElementById('header-sec').className += " header-transparent";
				}
				else{
					document.getElementById('header-sec').classList.remove('header-transparent');
				}
			}
		},0)
	}

	//addRemoveFooterClass method is used to add or remove classes on footer.
	addRemoveFooterClass () {
		setTimeout(()=>{
			if((this.currentUrl != '/session/signup') && (this.currentUrl != '/session/comingsoon') && (this.currentUrl != '/session/maintenance') && (this.currentUrl != '/session/login') && (this.currentUrl != '/session/signup2')) {
				if(this.currentUrl=='/'){
					document.getElementById('footer-wrap').classList.remove('footer-bg');
				}
				else{
					document.getElementById('footer-wrap').className += " footer-bg";
				}
			}
		},0)
	}

	/**
	  * changeDirection method is used to change the direction of layout.
	  */
   public changeDirection() {
      if(this.isRtl == "rtl") {
         this.isRtl = "ltr";
      } else {
         this.isRtl = "rtl"
      }
   }

   onActivate($event){
   	window.scrollTo(0,0);
   }

   @HostListener('window:scroll', ['$event'])
   //onScrollEvent method is used to show or hide the sticky header.
   onScrollEvent($event){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollTop >= 200) {
      	if(!document.getElementById('header-sticky').classList.contains('visible')){
      		document.getElementById('header-sticky').className += " visible";
      	}
      }  else {
         document.getElementById('header-sticky').classList.remove("visible");
      }
   }
}
