// src/app/components/task.stories.ts
import { action } from '@storybook/addon-actions';
import { TaskComponent } from './task.component';
export default {
  title: 'Task',
  excludeStories: /.*Data$/
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'Task_INBOX',
  updated_at: new Date(2019, 0, 1, 9, 0)
};
export const Default = () => ({
  component: TaskComponent,
  props: {
    task: taskData,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask
  }
});
// pinned task state
export const Pinned = () => ({
  component: TaskComponent,
  props: {
    task: {
      ...taskData,
      state: 'TASK_PINNED'
    },
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask
  }
});
// archived task state
export const Archived = () => ({
  component: TaskComponent,
  props: {
    task: {
      ...taskData,
      state: 'TASK_ARCHIVED'
    },
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask
  }
});
