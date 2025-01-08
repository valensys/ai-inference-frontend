import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-main-page',
  imports: [MatIconModule, RouterOutlet, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "objects",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/object.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "skeleton",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/skeleton.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "chat",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/chat.svg")
    );
  }
}
