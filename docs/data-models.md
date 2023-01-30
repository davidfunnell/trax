### Below are the models within the Service microservice:
#### ServiceAppointment
    vin             <- CharField(max_length=17)
    owner_name      <- CharField(max_length=100)
    date            <- DateField()
    time            <- TimeField()
    description     <- TextField()
    purchased       <- BooleanField(True if Vin is in InvintoryVinsVO else False)
    status          <- Charfield(max_length=100 Default="Active")
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

### Below are the models within the Sales microservice:

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

AutomobileVO is a value object that is storing polling data from the Inventory API. We are polling this data to keep all one-to-many relationship data within the microservice that is using it. We poll this data from the endpoint "http://inventory-api:8000/api/automobiles/" at a frequency of 60 seconds within the docker containers.
