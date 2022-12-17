from django.db import models
from django.urls import reverse


class InventoryVinsVO(models.Model):
    vin_vo = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200)
    model = models.CharField(max_length=100, null=True)
    manufacturer = models.CharField(max_length=100, null=True)
    year = models.PositiveSmallIntegerField(null=True)


class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveSmallIntegerField(unique=True)

    def get_api_url(self):
        return reverse("api_manufacturer", kwargs={"pk": self.id})


class ServiceAppointment(models.Model):
    vin = models.CharField(max_length=17)
    owner_name = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    description = models.TextField()
    purchased = models.BooleanField()
    status = models.CharField(max_length=100, default="Active")
    model = models.CharField(max_length=100, null=True)
    manufacturer = models.CharField(max_length=100, null=True)
    year = models.PositiveSmallIntegerField(null=True)
    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_vehicle_model", kwargs={"pk": self.id})
