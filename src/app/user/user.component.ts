import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()checkName: string | undefined;
  @Input()checkOwner: string | undefined;
  @Input()checkAddress: string | undefined;
  @Input()checkPrice: string | undefined;
  @Input()index: number | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  showOneName() {
    this.userService.checkOneName(this.index);
  }

}
