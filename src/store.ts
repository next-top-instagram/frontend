import { get, Writable, writable } from "svelte/store";
import axios from "axios";

class StoreManager {
  email: Writable<string>;
  constructor() {
    this.email = writable("");
    this.email.subscribe((val) => {
      console.log("[StoreManager] [subscribe] email updated", val);
    });
    this.checkUserAlreadyLoggedIn();
  }

  async checkUserAlreadyLoggedIn() {
    try {
      this.email.set((await axios.get("/backend/api/login")).data.data);
    } catch (err) {
      console.log(`[StoreManager] [checkUserAlreadyLoggedIn] err`, err);
    }
  }

  setEmail(email: string) {
    this.email.set(email);
  }

  getEmailValue() {
    return this.email;
  }
}
const storeManager = new StoreManager();
export const emailLoggedIn = (email: string) => storeManager.setEmail(email);
export const email = storeManager.email;
