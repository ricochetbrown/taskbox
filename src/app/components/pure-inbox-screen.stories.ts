import { moduleMetadata } from '@storybook/angular';
import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { TaskModule } from './task.module';
export default {
  title: 'PureInboxScreen',
  decorators: [
    moduleMetadata({
      imports: [TaskModule],
    }),
  ],
};
// inbox screen default state
export const Default = () => ({
  component: PureInboxScreenComponent,
});

// inbox screen error state
export const error = () => ({
  component: PureInboxScreenComponent,
  props: {
    error: true,
  },
});
