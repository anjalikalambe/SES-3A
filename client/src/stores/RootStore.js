import { create } from 'mobx-persist'

import userAuthStore from './data/auth-user'
import UiStore from "./ui/UiStore";

const hydrate = create({
  storage: localStorage
})

export default class RootStore {
  userAuth = new userAuthStore();
  uiStore = new UiStore();

  constructor() {
    hydrate('userData', this.userAuth);
  }
}