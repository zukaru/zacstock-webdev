import { Injectable } from '@angular/core';

/*
 * Menu interface
 */
export interface Menu {
	state: string;
	name?: string;
	type?: string;
	icon?: string;
	children?: ChildrenItems[];
}

/*
 * Children menu interface
 */
export interface ChildrenItems {
  	state: string;
  	name: string;
  	type?: string;
}

const HEADERMENUITEMS = [
   {
      state: "/",
      name: "HOME",
      type:"link"
   },
   {
      state:"services",
      name:"SERVICES",
      type:"link",
      icon: ''
   },/*
   {
      state:"portfolio",
      name:"PORTFOLIO",
      type:"link",
      icon: ''
   }, */
   {
      state: "contact",
      name: "CONTACT",
      type:"link"
   }
]

const FooterOneItems= [
   {
      state:'',
      name:"Company",
      type:"sub",
      icon: '',
      children: [
         {
            state: '/',
            name: 'Home',
            type: 'link'
         },
         {
            state: '/contact',
            name: 'Contact',
            type: 'link'
         },
         {
            state: '/services',
            name: 'Services',
            type: 'link'
         },
         {
            state: '/contact/project-requirements',
            name: 'Project Requirements',
            type: 'link'
         }
      ]
   }
]

@Injectable()
export class MenuItems {

   /*
    * Get all header menu
    */
   getMainMenu(): Menu[] {
      return HEADERMENUITEMS;
   }

   /*
    * Get all footer menu
    */
   getFooterOneMenu(): Menu[] {
      return FooterOneItems;
   }
}
