import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-private-lib-simple',
  template: `
    <p>
      private-lib-simple works!
    </p>
  `,
  styles: []
})
export class PrivateLibSimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
