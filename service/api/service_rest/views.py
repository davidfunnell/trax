from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import InventoryVinsVO, Technician, ServiceAppointment


# Create your views here.

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",
        "id",
    ]

class ServiceAppointmentsListEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "vin",
        "owner_name",
        "date",
        "time",
        "description",
        "purchased",
        "id",
        "technician",

    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }


#This function gets both hats by locations and all hats
#This function allows you to create a hat with a locationVO
@require_http_methods(["GET", "POST"])
def api_list_service_appointments(request, input_vin=None):
    if request.method == "GET":
        if input_vin is not None:
            service_appointments = ServiceAppointment.objects.filter(vin=input_vin)
        else:
            service_appointments = ServiceAppointment.objects.all()
        return JsonResponse(
            {"service appointments": service_appointments},
            encoder=ServiceAppointmentsListEncoder,
        )
    else:
        content = json.loads(request.body)
        # delete purchased true and implement below once I get polling working.
        # try:
        #     purchased = InventoryVinsVO.objects.get(vin_vo=content["vin"])
        #     content["purchased"] = True
        # except InventoryVinsVO.DoesNotExist:
        #     content["purchased"] = False

        try:
            content["purchased"] = True
            technician = Technician.objects.get(id=content["technician"])
            content["technician"] = technician
            service = ServiceAppointment.objects.create(**content)
            return JsonResponse(
                service,
                encoder=ServiceAppointmentsListEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the Service Appointment"}
            )
            response.status_code = 400
            return response




#This function allows you to get the details of a hat or delete it
# @require_http_methods(["GET", "DELETE"])
# def api_show_hat(request, pk):
#     if request.method == "GET":
#         try:
#             hat = Hat.objects.get(id=pk)
#             return JsonResponse(
#                 hat,
#                 encoder=HatDetailEncoder,
#                 safe=False
#             )
#         except Hat.DoesNotExist:
#             response = JsonResponse({"message": "Does not exist, Can't Get Detail View"})
#             response.status_code = 404
#             return response
#     elif request.method == "DELETE":
#         try:
#             hat = Hat.objects.get(id=pk)
#             hat.delete()
#             return JsonResponse({"deleted": "true"})
#         except Hat.DoesNotExist:
#             return JsonResponse({"message": "Does not exist, Can't Delete"})


#added this so i can use it for my dropdown list to create a new hat based off of VO locations
@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the Technician"}
            )
            response.status_code = 400
            return response
