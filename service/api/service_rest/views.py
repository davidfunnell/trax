from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import InventoryVinsVO, Technician, ServiceAppointment


class InventoryVOEncoder(ModelEncoder):
    model = InventoryVinsVO
    properties = [
        "vin_vo",
        "id",
        "import_href",
    ]


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
        "status",
        "id",
        "technician",

    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }


#This is a RESTFUL API Post,Get all, filter by vin, view for service appointments
@require_http_methods(["GET", "POST"])
def api_list_service_appointments(request, input_vin=None):
    if request.method == "GET":
        if input_vin is not None:
            service_appointments = ServiceAppointment.objects.filter(vin=input_vin)
        else:
            service_appointments = ServiceAppointment.objects.all()
        return JsonResponse(
            {"appointments": service_appointments},
            encoder=ServiceAppointmentsListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            try:
                purchase = InventoryVinsVO.objects.get(vin_vo=content["vin"])
                content["purchased"] = True
            except InventoryVinsVO.DoesNotExist:
                content["purchased"] = False
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


#This is a RESTFUL API Get detail, Delete and PUT view for service appointments
@require_http_methods(["GET", "DELETE", "PUT"])
def api_show_service_detail(request, pk):
    if request.method == "GET":
        try:
            service = ServiceAppointment.objects.get(id=pk)
            return JsonResponse(
                service,
                encoder=ServiceAppointmentsListEncoder,
                safe=False
            )
        except ServiceAppointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist, Can't Get Detail View"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            service = ServiceAppointment.objects.get(id=pk)
            service.delete()
            return JsonResponse({"deleted": "true"})
        except ServiceAppointment.DoesNotExist:
            return JsonResponse({"message": "Does not exist, Can't Delete"})
# This was added for making a service as complete
    else:
        content = json.loads(request.body)
        ServiceAppointment.objects.filter(id=pk).update(**content)
        appointment = ServiceAppointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=ServiceAppointmentsListEncoder,
            safe=False,
        )


#This is a RESTFUL API Post and Get all view for technicians
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


#This is a RESTFUL API Get view for polled vehicle vins stored as value objects
def api_list_inventory_vins_vo(request):
    if request.method == "GET":
        inventory_vins_vo = InventoryVinsVO.objects.all()
        return JsonResponse(
            {"inventory_vo_vins": inventory_vins_vo},
            encoder=InventoryVOEncoder,
        )
