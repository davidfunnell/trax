# CarCar

Team:

* David Funnell - Service microservice
* Tommy Mai - Sales microservice

## Design
Below is a diagram of the app architecture. It shows our 3 microservices along with our React front-end running within docker and their port locations to your local.

## Service microservice

The Service microservice is run on http://localhost:8080 on your local machine.

### API Help
Below are a list of RESTful api endpoints that the Service microservice uses.

To get a list of all of the Services:
GET: http://localhost:8080/api/service/

    The response code should be 200 OK if successful. The response should look as shown below.

    {
	"appointments": [
        {
        "vin": "1C3CC5FB2AN120175",
        "owner_name": "David",
        "date": "2023-03-06",
        "time": "09:00:00",
        "description": "30,000 mile checkup",
        "purchased": true,
        "complete": false,
        "id": 1,
        "technician": {
            "name": "Mark",
            "employee_number": 12345,
            "id": 1
        }
		},
        .....additional items shown here...
        ]
    }


To get a list of all of the Services by Vehicle Vin:
GET: http://localhost:8080/api/service/#/vin/

    Insert the vehicle vin in place of # in the endpoint to correctly show all service history by vin.

    The response code should be 200 OK if successful. The response should look as shown below.

    {
	"appointments": [
        {
        "vin": "1C3CC5FB2AN120175",
        "owner_name": "David",
        "date": "2023-03-06",
        "time": "09:00:00",
        "description": "30,000 mile checkup",
        "purchased": true,
        "complete": false,
        "id": 1,
        "technician": {
            "name": "Mark",
            "employee_number": 12345,
            "id": 1
        }
		},
        .....additional items shown here...
        ]
    }


To create a Service Appointment:
POST: http://localhost:8080/api/service/

    below is the correct JSON BODY formatting for POST;
    {
        "owner_name": "Ev",
        "date": "2023-04-06",
	    "time": "12:00",
        "description": "Tire Change",
        "vin": "1C3CC5FB2AN120196",
        "technician": 1
    }

    "technician": "1" is representing the id of the Technician you would like to select.

    The response code should be 200 OK if successful. The response should look as shown below.

    {
        "vin": "1C3CC5FB2AN120196",
	    "owner_name": "Ev",
        "date": "2023-04-06",
        "time": "12:00",
        "description": "Tire Change",
        "purchased": false,
        "complete": false,
        "id": 20,
        "technician": {
            "name": "Mark",
            "employee_number": 12345,
            "id": 1
        }
    }

    If you have have inserted a technician id that does not exist, you will recieve a response code of 400 BAD REQUEST. The response should look as shown below.

    {
	    "message": "Could not create the Service Appointment"
    }


To delete a Service Appointment:
DELETE: http://localhost:8080/api/service/#/

    Insert the service appointment id in place of # in the endpoint to correctly delete the appointment of your choice.

    The response code should be 200 OK if successful. The response should look as shown below.

    {
	    "deleted": "true"
    }

    If you have have inserted a service appointment id that does not exist, you will recieve a response code of 400 BAD REQUEST. The response should look as shown below.

    {
	    "message": "Does not exist, Can't Delete"
    }


To Update a Service Appointment:
PUT: http://localhost:8080/api/service/#/

    Insert the service appointment id in place of # in the endpoint to correctly update the appointment of your choice.

    below is the correct JSON BODY formatting for PUT. Note: You only need to add the Key:Value pairs that you would like to update;
    {
        "owner_name": "Ev",
        "date": "2023-04-06",
	    "time": "12:00",
        "description": "Tire Change",
        "vin": "1C3CC5FB2AN120196",
        "technician": 1
    }


To get a list of all of the Technicians:
GET: http://localhost:8080/api/technicians/

    The response code should be 200 OK if successful. The response should look as shown below.

    {
	"technicians": [
       {
        "name": "Mark",
        "employee_number": 12345,
        "id": 1
		},
        .....additional items shown here...
        ]
    }


To create a Technician:
POST: http://localhost:8080/api/technicians/

    below is the correct JSON BODY formatting for POST;
    {
        "name": "Jim",
        "employee_number": 12360
    }

    "technician": "1" is representing the id of the Technician you would like to select.

    The response code should be 200 OK if successful. The response should look as shown below.

    {
        "name": "Jim",
        "employee_number": 12360,
        "id": 13
    }

    If you have have inserted a employee ID thats already been used, you will recieve a response code of 400 BAD REQUEST. The response should look as shown below.

    {
	    "message": "Could not create the Technician"
    }


***** Additionally included functionality

To get details for a specific service appointment;
GET: http://localhost:8080/api/service/#/

    Insert the service appointment id in place of # in the endpoint to correctly see details on the appointment of your choice.

    The response code should be 200 OK if successful. The response should look as shown below.

    {
        "vin": "1C3CC5FB2AN120176",
        "owner_name": "Bob",
        "date": "2023-04-06",
        "time": "12:00:00",
        "description": "Tire Change",
        "purchased": true,
        "complete": false,
        "id": 3,
        "technician": {
            "name": "Jack",
            "employee_number": 12347,
            "id": 3
        }
    }


To see a list of all currently polled Inventory VIN value objects within the Service microservice;
GET: http://localhost:8080/api/inventoryvo/

    {
	"inventory_vo_vins": [
        {
        "vin_vo": "1C3CC5FB2AN120175",
        "id": 1,
        "import_href": "/api/automobiles/1C3CC5FB2AN120175/"
        },
        ..additional items shown here...
        ]
    }


### Below are the models within the Service microservice:
#### ServiceAppointment
    vin             <- CharField(max_length=17)
    owner_name      <- CharField(max_length=100)
    date            <- DateField()
    time            <- TimeField()
    description     <- TextField()
    purchased       <- BooleanField( True if Vin is in InvintoryVinsVO else False )
    complete        <- BooleanField( Default to False )
    technician      <- ForeignKey to Technician Model

vin, owner_name...etc are fields of the model.

#### InventoryVinsVO
    name                <- CharField(max_length=100)
    employee_number     <- PositiveSmallIntegerField(unique=True)

vin, owner_name...etc are fields of the model.

#### InventoryVinsVO
    vin_vo          <- CharField(max_length=17, unique=True)
    import_href     <- CharField(max_length=200)

InventoryVinsVO is a value object that is storing polled data from the Inventory API. We are polling this data to keep all one-to-many relationship data within the microservice that is using it. We poll this data from the endpoint ""http://inventory-api:8000/api/automobiles/" at a frequency of 60 seconds within the docker containers.

_______________________________________________________________________

## Sales microservice

The Sales microservice is run on http://localhost:8090 on your local machine.

### API Help
Below are a list of RESTful api endpoints that the Sales microservice uses.

To get a list of all of the Sales Person:
GET: http://localhost:8090/api/sales_persons/

 The response code should be 200 OK if successful. The response should look as shown below.

		{
			"name": "Josh",
			"employee_number": 100,
			"id": 13
		}
	]
}

To Create a Sales Person:
POST: http://localhost:8090/api/sales_persons/

below is the correct JSON BODY formatting for POST;
{
	"name": "Timmy",
	"employee_number": "55"
}

If you enter a key value that has been used then there will be an error that states:
"duplicate key value violates unique constraint"


To Update a Sales Person:
PUT: http://localhost:8080/api/service/#/ 

    Insert the Sales person id in place of # in the endpoint to correctly update the sales person of your choice.

    below is the correct JSON BODY formatting for PUT. Note: You only need to add the Key:Value pairs that you would like to update;

{
	"sales_persons": [
		{
			"name": "Kevin",
			"employee_number": 1,
			"id": 12
		}
	]
}
 
To Delete a Sales Person:
DELETE: http://localhost:8090/api/sales_persons/#/

    Insert the sales person id in place of # in the endpoint to correctly delete the person of your choice.

    The response code should be 200 OK if successful. The response should look as shown below.

    {
        "deleted": "true"
    }

    If you have inserted a sales person id that does not exist, you will recieve a response code of 400 BAD REQUEST. The response should look as shown below.

    {
        "message": "Does not exist, Can't Delete"
    }

_________________________________________________________________________

To get a list of all of the Sales Records:
GET: http://localhost:8090/api/salerecords/

 The response code should be 200 OK if successful. The response should look as shown below.

{
	"sales": [
		{
			"price": "$1000",
			"sales_person": {
				"name": "Kevin",
				"employee_number": 1,
				"id": 12
			},
			"customer": {
				"name": "Tommy",
				"address": "12 Seattle Way ",
				"phone_number": "123 345 6689",
				"id": 12
			},
			"id": 2,
			"vin": "523242423423"
		}
	]
}

To Create a Sales Records:
POST: http://localhost:8090/api/salerecords/

{
	"sales": []
}

To Update a Sales Records:
PUT: http://localhost:8090/api/salerecords/#/

    Insert the Sales record id in place of # in the endpoint to correctly update the sales record of your choice.

    below is the correct JSON BODY formatting for PUT. Note: You only need to add the Key:Value pairs that you would like to update;

{
	"sales": []
}

To Delete a Sales Records:
DELETE: http://localhost:8090/api/salerecords/#/

    Insert the sales records id in place of # in the endpoint to correctly delete the sales record of your choice.

    The response code should be 200 OK if successful. The response should look as shown below.

    {
        "deleted": "true"
    }

    If you have have inserted a sales records id that does not exist, you will recieve a response code of 400 BAD REQUEST. The response should look as shown below.

    {
        "message": "Does not exist, Can't Delete"
    }

_________________________________________________________________________________________

To get a list of all of the Customers:
GET: http://localhost:8090/api/customers/

 The response code should be 200 OK if successful. The response should look as shown below.

{
	"customers": [
		{
			"name": "Tommy",
			"address": "12 Seattle Way ",
			"phone_number": "123 345 6689",
			"id": 12
		}
	]
}

To Create a Customer:
POST: http://localhost:8090/api/customers/

{
	"customers": []
}

To Update a Customer:
PUT: http://localhost:8090/api/customers/#/

    Insert the customers id in place of # in the endpoint to correctly update the customers of your choice.

    below is the correct JSON BODY formatting for PUT. Note: You only need to add the Key:Value pairs that you would like to update;

{
	"customers": []
}

To Delete a Customer:
DELETE: http://localhost:8090/api/customers/#/

    Insert the customer id in place of # in the endpoint to correctly delete the appointment of your choice.

    The response code should be 200 OK if successful. The response should look as shown below.

    {
        "deleted": "true"
    }

    If you have have inserted a customer id that does not exist, you will recieve a response code of 400 BAD REQUEST. The response should look as shown below.

    {
        "message": "Does not exist, Can't Delete"
    }

### Below are the models within the Service microservice:

#### SalesPerson
    name             <- CharField(max_length=100)
    employee_number  <- PositiveSmallIntegerField(unique=True)

#### Customer
    name             <- CharField(max_length=17, unique=True)
    address          <- CharField(max_length=200)                       
    phone_number     <- CharField(max_length=15)

#### SaleRecord
    price            <- CharField(max_length=50)

#### AutomobileVO
    vin              <- CharField(max_length=17, unique=True)
    import_href      <- CharField(max_length=100, unique=True, null=True)

AutomobileVO is a value object that is storig polling data from the Inventory API. We are polling this data to keep all one-to-many relationship data within the microservice that is using it. We poll this data from the endpoint "http://inventory-api:8000/api/automobiles/" at a frequency of 60 seconds within the docker containers.

