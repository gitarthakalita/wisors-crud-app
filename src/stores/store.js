import { decorate,  observable } from "mobx";
import {action, computed } from "mobx";

class Store {

    @observable notification = {
        type: '',
        message: ''
    };
    @observable mobile = ['1'];
    @observable user = {
        phone: null,
        firstname: '',
        lastname: '',
        state: '',
        country: '',
        email:'',
        
      };

    @action clearList() {
        this.notification = {
            type: '',
            message: ''
        };
    }

    @action addNotification(n) {
        this.notification = n;
    }

    @computed get getNotification() {
        return this.notification;
    }


}

const appStore = new Store();
export default appStore;
