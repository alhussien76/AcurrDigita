import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnDestroy {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isExpanded = true;
  showSideNav = false;
  componentActive = true
  searchValue = ""
  sideNaveLinks: { name: string, iconName: string }[] = sideLinks

  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) { }

  navigateTo(name: string): void {
    // todo navigate to ${name} link
  }
  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
    this.isHandset$.pipe(takeWhile(val => val = this.componentActive)).subscribe(isHanded => {
      if (isHanded) {
        if (!this.sidenav.opened) {
          this.showSideNav = true;
          this.sidenav.open();
          this.showSideNav = false;
          this.isExpanded = true;
        }
      }
      else if (!isHanded) {
        if (!this.sidenav.opened) {
          this.sidenav.open();
        }
      }
    });
  }
  ngOnDestroy(): void {
    this.componentActive = false;
  }



}
const sideLinks = [
  { name: 'Widgets', iconName: 'widgets' },
  { name: 'Charts', iconName: 'pie_chart' },
  { name: 'Tables', iconName: 'table_chart' },
  { name: 'Calender', iconName: 'calendar_today' },
  { name: 'Mailbox', iconName: 'mail' },
  { name: 'Pages', iconName: 'pages' },
];