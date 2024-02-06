import { CanDeactivateFn } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

export const contactGuard: CanDeactivateFn<ContactComponent> = (component, currentRoute, currentState, nextState) => {
  return component.canExit;
};
