# -*- coding: utf-8 -*-
"""
Created on Thu Mar  5 11:41:04 2020

@author: ranjit
"""

import requests

import json


  
def postRegistraion():
    
    print("postRegistraion from Client")
    
    url = 'http://localhost:8080/user/registration/create'
    #url = 'http://localhost:8080/user/kafka/publishMsg'
    
    print ("url : " , url)

    headers = {
        'cache-control': "no-cache",
    }
    
    
    response = requests.post(url, json = {"usertype": "admin", 	
  "firstname": "ranjit",
  "lastname": "sharma",
  "addressline1": "marthahalli1",
  "addressline2": "marthahalli2",
  "city": "Bangalore",
  "state": "KA",
  "pin": "560067",
  "country": "INDIA",
  "phone": "2000",
  "email": "ranjit0027@gmail.com",
  "subscriptionlevel": "Weekly",
  "dob": "1985-12-12",
  "gender": "Male",
  "groupid" : "2",
  "addresstype":"home"}
   , headers=headers)
    
    responseStatusCode = response.status_code
    print(" responseStatusCode : " , responseStatusCode)
    
    print("-----------------------------------")
    print("")
    
    data = response.text
    print(" RESPONSE DATA : " , data)
    print("")
    print("-----------------------------------")
        


def putRegistraion():
    
    print("putRegistraion from Client")
    
    url="http://localhost:8080/user/registration/update/phone?primaryPhone=2000"
    print ("url : " , url)

    headers = {
        'cache-control': "no-cache",
    }
    
    
   #data = {"firstname":"ranjit","lastname":"sharma","state":"KA","country":"India","email":"ranjit@gmail.com","phone":"9999999","streetnumber":"2524","streetname":"belathur","city":"Bangalore","servicename":"HealthCare","plan":"Wisor Basic","cardnumber":"88888888","nameoncard":"Ranjitsharma","expirydate":"2030-12-31","servicedescription":"Diabetic Test","billingaddress":"Whitefiled,Bangalore"}
    
    #response = requests.request("GET", url, headers=headers)
    response = requests.put(url, json = {"usertype": "admin", 	
  "firstname": "ranjit",
  "lastname": "sharma",
  "addressline1": "marthahalli1",
  "addressline2": "marthahalli2",
  "city": "Bangalore",
  "state": "KA",
  "pin": "560067",
  "country": "INDIA",
  "phone": "2000",
  "email": "ranjit0027@gmail.com",
  "subscriptionlevel": "Monthly",
  "dob": "1985-12-12",
  "gender": "Male",
  "groupid" : "1",
  "addresstype":"Office"} 
    , headers=headers)
    
    responseStatusCode = response.status_code
    print(" responseStatusCode : " , responseStatusCode)
    
    print("-----------------------------------")
    print("")
    
    data = response.text
    print(" RESPONSE DATA : " , data)
    


def deleteOperations():
    print("Delete operations ...")
    url="http://localhost:8080/user/registration/delete/phone?primaryPhone=2000"
    
    headers = {
        'cache-control': "no-cache",
    }
    
    response = requests.delete(url,headers=headers)
    responseStatusCode = response.status_code
    print(" responseStatusCode : " , responseStatusCode)
    
    print("-----------------------------------")
    print("")
    
    data = response.text
    print(" RESPONSE DATA : " , data)
    

def retriveOperations():
    print("Retrive operations ...")
    url="http://localhost:8080/user/phone?primaryPhone=2000"
    
    headers = {
        'cache-control': "no-cache",
    }
    
    response = requests.get(url,headers=headers)
    responseStatusCode = response.status_code
    print(" responseStatusCode : " , responseStatusCode)
    
    print("-----------------------------------")
    print("")
    
    data = response.text
    print(" RESPONSE DATA : " , data)
    

def retriveOperations_invalidPhNo():
    print("retriveOperations_invalid  ...")
    url="http://localhost:8080/user/phone?primaryPhone=3000"
    
    headers = {
        'cache-control': "no-cache",
    }
    
    response = requests.get(url,headers=headers)
    responseStatusCode = response.status_code
    print(" responseStatusCode : " , responseStatusCode)
    
    print("-----------------------------------")
    print("")
    
    data = response.text
    print(" RESPONSE DATA : " , data)


def putRegistraion_invalidPhNo():
    
    print("putRegistraion_invalidPhNo from Client")
    
    url="http://localhost:8080/user/registration/update/phone?primaryPhone=3000"
    print ("url : " , url)

    headers = {
        'cache-control': "no-cache",
    }
    
    
    response = requests.put(url, json = {"usertype": "admin", 	
  "firstname": "ranjit",
  "lastname": "sharma",
  "addressline1": "marthahalli1",
  "addressline2": "marthahalli2",
  "city": "Bangalore",
  "state": "KA",
  "pin": "560067",
  "country": "INDIA",
  "email": "ranjit0027@gmail.com",
  "subscriptionlevel": "Monthly",
  "dob": "1985-12-12",
  "gender": "Male",
  "groupid" : "1",
  "addresstype":"Office"} 
    , headers=headers)
    
    responseStatusCode = response.status_code
    print(" responseStatusCode : " , responseStatusCode)
    
    print("-----------------------------------")
    print("")
    
    data = response.text
    print(" RESPONSE DATA : " , data)


def deleteOperations_invalidPhNo():
    print("deleteOperations_invalidPhNo  ...")
    url="http://localhost:8080/user/registration/delete/phone?primaryPhone=3000"
    
    headers = {
        'cache-control': "no-cache",
    }
    
    response = requests.delete(url,headers=headers)
    responseStatusCode = response.status_code
    print(" responseStatusCode : " , responseStatusCode)
    
    print("-----------------------------------")
    print("")
    
    data = response.text
    print(" RESPONSE DATA : " , data)
    
   
def main():
    
    print("**************")
    
    #postRegistraion()
    
    #retriveOperations()
    
    putRegistraion()
    
    #deleteOperations()
    
    #retriveOperations_invalidPhNo()
    
    #putRegistraion_invalidPhNo()
    
    #deleteOperations_invalidPhNo()


    
if __name__ == "__main__": main()
