# CarCar

Team:

* David Funnell - Service microservice
* Tommy Mai - Sales microservice


## Start Up Instructions

 To run this application, fork and clone the main branch of this project and run the following commands in your terminal within the projects PWD.

 ![Fork And Clone Instructions](fork_clone_instructions.png)

    docker volume create beta-data
    docker-compose build
    docker-compose up

After successfully building and starting your containers, we recommend you start by adding manufacturers, models and automobiles within inventory to be able to create new service appointments within the service microservice and create new sales within the sales microservice.

## Design
Below is a diagram of the app architecture. It shows our 3 microservices along with our React front-end running within docker and their port locations to your local.

## Service microservice

The Service microservice is run on http://localhost:8080 on your loal machine.

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

#### Technician
    name                <- CharField(max_length=100)
    employee_number     <- PositiveSmallIntegerField(unique=True)

Name and employee_number are fields of the model.

#### InventoryVinsVO
    vin_vo          <- CharField(max_length=17, unique=True)
    import_href     <- CharField(max_length=200)

vin_vo and import_href are fields of the model.

InventoryVinsVO is a value object that is storing polled data from the Inventory API. We are polling this data to keep all one-to-many relationship data within the microservice that is using it. We poll this data from the endpoint ""http://inventory-api:8000/api/automobiles/" at a frequency of 60 seconds within the docker containers.


## Sales microservice

Explain your models and integration with the inventory
microservice, here.
