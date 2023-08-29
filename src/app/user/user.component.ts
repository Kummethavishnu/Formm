import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class User{
  constructor(
    public name: string,
    public email: string,
    public phone: number,
    public topic: string,
    public timepreference: string,
    public subscribe: string
  ){}
}
