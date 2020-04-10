# -*- coding: utf-8 -*-
"""
Created on Thu Mar  5 11:24:00 2020

@author: ranjit
"""

import json

from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/user/*":{"origins": "*"}})


@app.route('/user/registration/create',methods=['POST'])
def doCreateRegistraion(): 
    print("-----------CREATE ---------------")
    
    
    try:
        print("Try block")
        print("==============")
        
        print("Data : ", request)
        
        print("================")
        
        receiveddata = request.get_json();
        print("ReceivedData From Client : ", receiveddata)

        
        print("===============================================================")
        print("")
        print("usertype : " + receiveddata["usertype"])
        print("firname : " + receiveddata["firstname"])
        print("lastname : " + receiveddata["lastname"])
        print("addressline1 : " + receiveddata["addressline1"])
        print("addressline2 : " + receiveddata["addressline2"])
        print("city : " + receiveddata["city"])
        print("state : " + receiveddata["state"])
        print("pin : " + receiveddata["pin"])
        print("country : " + receiveddata["country"])
        print("phone : " + receiveddata["phone"])
        print("email : " + receiveddata["email"])
        print("subscriptionlevel : " + receiveddata["subscriptionlevel"])
        print("dob : " + receiveddata["dob"])
        print("gender : " + receiveddata["gender"])
        print("groupid : " + receiveddata["groupid"])
        print("addresstype : " + receiveddata["addresstype"])
        
        
        print("")    
        print("SERVICE WILL DO PROCESSING AND STORE IN DB")
        print("================================================================")
    
    except KeyError as e:
        print('Invalid recipe: missing ')

        
    print("==========================")      
    print("")
    
    a ={"phone":receiveddata["phone"], "status":"Registration Successfull"} 
    b = json.dumps(a)
    print("")
    print(b)
    print("")
    return b;


@app.route('/user/registration/update/phone',methods=['PUT'])
def doPut(): 
    global b
    print("-----------UPDATE---------------")
    
    
    try:
        print("Try block")
        print("==============")
        
        print("Data : ", request)
        
        print("================")
        
        receiveddata = request.get_json();
        
        print("ReceivedData From Client : ", receiveddata)
        
        phoneNo = request.args.get('primaryPhone')
        
        if phoneNo == "2000":
            print("===============================================================")
            print("")
        
            print("usertype : " + receiveddata["usertype"])
            print("firname : " + receiveddata["firstname"])
            print("lastname : " + receiveddata["lastname"])
            print("addressline1 : " + receiveddata["addressline1"])
            print("addressline2 : " + receiveddata["addressline2"])
            print("city : " + receiveddata["city"])
            print("state : " + receiveddata["state"])
            print("pin : " + receiveddata["pin"])
            print("country : " + receiveddata["country"])
            print("phone : " + phoneNo)
            print("email : " + receiveddata["email"])
            print("subscriptionlevel : " + receiveddata["subscriptionlevel"])
            print("dob : " + receiveddata["dob"])
            print("gender : " + receiveddata["gender"])
            print("groupid : " + receiveddata["groupid"])
            print("addresstype : " + receiveddata["addresstype"])
        
        
       
            print("")    
            print(" BUSINESS LOGIC WILL EXECUTE IN BACKEDN SERVER")
            print("================================================================")
            
            a ={"phone":request.args.get('primaryPhone'), "status":"Update Successfull ???"} 
            b = json.dumps(a) 
        
        else:
            print("==========================")      
            print("")
    
            a ={"phone": "Not a valid PhoneNo " + phoneNo, "status":"Update NotSuccessfull"} 
            b = json.dumps(a) 
            return b;

        
    except KeyError as e:
        print('Invalid recipe: missing ')

        
    print("==========================")      
    print("")
    print(b)
    print("")
	
    return b;


@app.route('/user/registration/delete/phone',methods=['DELETE'])
def doDelete(): 
    global b

    print("-----------DELETE---------------")
    
    try:
        print("Try block")
        print("==============")
        print("Data : ", request)
        print("================")   
        print("primaryPhone : " , request.args.get('primaryPhone'))    
        print("")    
        
        phoneNo = request.args.get('primaryPhone')

        if phoneNo == "2000":
            
            print(" BUSINESS LOGIC WILL EXECUTE IN BACKEDN SERVER")
            print("================================================================")
            
            a ={"phone":request.args.get('primaryPhone'), "status":"Delete Successfull..."} 
            b = json.dumps(a) 
        
        else:
            a ={"phone":"Not a valid PhoneNo " + phoneNo, "status":"Delete NotSuccessfull"} 
            b = json.dumps(a)
            
    except KeyError as e:
        print('Invalid recipe: missing ')

        
    print("==========================")
    print("")
    print(b)
    print("")
    
    return b;




@app.route('/user/phone',methods=['GET'])
def doRetrive(): 
    global b
    print("-----------SEARCH---------------")
    
    try:
        print("Try block")
        print("==============")
        print("Data : ", request)
        print("================")
        phNo = request.args.get('primaryPhone')
        print("primaryPhone :"  , phNo)   
        
        if phNo == "2000":
            
            print(" BUSINESS LOGIC WILL EXECUTE IN BACKEDN SERVER")
            print("================================================================")
            
            print("==========================")      
            print("")
            active=bool("true")
    
            a = {"usertype": "admin", 	
"firstname": "ranjit",
  "lastname": "sharma",
  "addressline1": "marthahalli1",
  "addressline2": "marthahalli2",
  "activeflag": active,
  "createdate": "2020-04-03 17:36:54",
  "updatedate": "2020-04-03 17:36:54",
  "inactivedate": "2021-04-02 18:37:55",
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
    
            b = json.dumps(a)
            print("")
            return b
    
        else:
            print("==========================")      
            print("")
    
            a = { "state": "",
    "country": "",
    "userid": 0,
    "activeflag": "false",
    "createdate": "",
    "updatedate": "",
    "inactivedate": "",
    "phone": "",
    "usertype": "",
    "firstname": "",
    "lastname": "",
    "email": "",
    "addressline1": "",
    "addressline2": "",
    "subscriptionlevel": "",
    "city": "",
    "pin": "",
    "dob": "",
    "gender": "",
    "groupid": "",
    "addresstype": ""}
    
            b = json.dumps(a)
            return b
    
            
            
    except KeyError as e:
        print('Invalid recipe: missing ')

        
    print("==========================")      
    print("")
    print("b")
    print("")
    return b;


@app.route('/user/kafka/publishMsg',methods=['POST'])
def doRegistraion(): 
    global fileType
    print("-----------doRegistraion---------------")
    
    
    try:
        print("Try block")
        print("==============")
        
        print("Data : ", request)
        
        print("================")
        
        
        #header_data = request.headers.get('cache-control')
        #print("header_data : " + header_data)
        
        
        receiveddata = request.get_json();
        print("ReceivedData From Client : ", receiveddata)
    
        
        
        print("===============================================================")
        print("")
        print("firname : " + receiveddata["firstname"])
        print("lastname : " + receiveddata["lastname"])
        print("state : " + receiveddata["state"])
        print("country : " + receiveddata["country"])
        print("email : " + receiveddata["email"])
        print("phone : " + receiveddata["phone"])
        print("streetnumber : " + receiveddata["streetnumber"])
        print("streetname : " + receiveddata["streetname"])
        print("city : " + receiveddata["city"])
        print("servicename : " + receiveddata["servicename"])
        
        print("plane : " + receiveddata["plane"])
        print("cardnumber : " + receiveddata["cardnumber"])
        print("nameoncard : " + receiveddata["nameoncard"])
        print("expirydate : " + receiveddata["expirydate"])
        print("servicedescription : " + receiveddata["servicedescription"])
        print("billingaddress : " + receiveddata["billingaddress"])
       
        print("")    
        print("================================================================")
    
    except KeyError as e:
        print('Invalid recipe: missing ')

        
    print("==========================")      
    print("")
    
    a ={"phone":receiveddata["phone"], "status":"Registration Successfull !!!"} 
    b = json.dumps(a) 
    print(b)
    print("")
    return b;

    
if __name__ == '__main__':
    app.run(debug=True, host = '0.0.0.0', port=8080)
 
    
