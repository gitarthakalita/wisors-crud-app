import { decorate,  observable } from "mobx";
import {action, computed } from "mobx";

class Store {

    @observable notification = {
        type: '',
        message: ''
    };
    @observable mobile = [1];
    @observable user = {
        phone: 923293923,
        firstname: 'debajit',
        lastname: 'deka',
        state: 'assam',
        country: 'india',
        email:'xxx@gmail.com',
        streetnumber: '11222'
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
