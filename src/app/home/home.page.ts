import { Component } from "@angular/core";
import {
  InAppBrowserOptions,
  InAppBrowser,
} from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  website = "https://www.google.com/";
  options: InAppBrowserOptions = {
    location: "no",
    hidden: "no",
    zoom: "no",
    hideurlbar: "yes",
    toolbar: "no",
  };
  private browser;
  constructor(private _inAppBrowser: InAppBrowser) {
    this.start();
  }
  private start() {
    this.browser = this._inAppBrowser.create(
      this.website,
      "_blank",
      this.options
    );
    if (this.browser.on("loadstart")) {
      this.browser.on("loadstart").subscribe((event) => {
        // console.log(event.url);
        // alert(event.url);
      });
    }
    if (this.browser.on("exit")) {
      this.browser.on("exit").subscribe((event) => {
        navigator["app"].exitApp();
      });
    }
  }
}
