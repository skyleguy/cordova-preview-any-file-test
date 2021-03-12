import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Preview';

  public ngOnInit(): void {
    console.log('starting timeout');
    setTimeout((): void => {
      console.log('starting preview');
      (<any>window).PreviewAnyFile.previewAsset(
        (win: any) => console.log("open status",win),
        (error: any) => console.error("open failed", error),
        '/assets/Budgeting.xlsx'
    );
    }, 5000);
  }
}
