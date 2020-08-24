import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TaskComponent } from './task.component';
import { PureTaskListComponent } from './pure-task-list.component';
import { TaskListComponent } from './task-list.component';
import { TasksState } from '../state/task.state';
import { InboxScreenComponent } from './inbox-screen.component';
import { PureInboxScreenComponent } from './pure-inbox-screen.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [
    TaskComponent,
    PureTaskListComponent,
    TaskListComponent,
    PureInboxScreenComponent,
    InboxScreenComponent,
  ],
  declarations: [
    TaskComponent,
    PureTaskListComponent,
    TaskListComponent,
    PureInboxScreenComponent,
    InboxScreenComponent,
  ],
  providers: [],
})
export class TaskModule {}
