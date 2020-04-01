import { decorate,  observable } from "mobx";
import {action, computed } from "mobx";

class Store {

    @observable notification = {
        type: '',
        message: ''
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