import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-main-buttons',
  imports: [MatIconModule],
  templateUrl: './main-buttons.component.html',
  styleUrl: './main-buttons.component.css',
})
export class MainButtonsComponent {
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
