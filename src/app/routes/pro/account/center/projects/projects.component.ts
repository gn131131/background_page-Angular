/*
 * @Description:
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-30 15:47:59
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-31 00:05:55
 */
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-account-center-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProAccountCenterProjectsComponent {
  listLoading = true;
  list: any[] = [];
  constructor(private http: _HttpClient, private cdr: ChangeDetectorRef, public msg: NzMessageService) {
    this.http.get('/api/list', { count: 8 }).subscribe((res: any) => {
      this.list = res;
      this.listLoading = false;
      this.cdr.detectChanges();
    });
  }
}
