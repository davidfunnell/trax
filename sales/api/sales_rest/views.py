from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json


from common.json import ModelEncoder
from .models import Customer, SalesPerson, SaleRecord, AutomobileVO


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "id"]


class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = ["name", "address", "phone_number", "id"]


class SalesPersonDetailEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["name", "employee_number", "id"]


class SaleRecordDetailEncoder(ModelEncoder):
    model = SaleRecord
    properties = ["price", "sales_person", "customer", "id"]
    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        "customer": CustomerDetailEncoder(),
        "sales_person": SalesPersonDetailEncoder(),
    }

    def get_extra_data(self, o):
        return {
            "vin": o.automobile.vin,
        }


@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    """
    Lists the customers' names
    """
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse({"customers": customers}, encoder=CustomerDetailEncoder)

    else:  # POST
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(customer, encoder=CustomerDetailEncoder, safe=False)


@require_http_methods(["PUT", "DELETE", "GET"])
def api_show_customers(request, pk):
    """
    Returns the details for the customer specified by the pk paramenter
    """

    if request.method == "GET":
        customer = Customer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder=CustomerDetailEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Customer.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:  # PUT
        content = json.loads(request.body)
        Customer.objects.filter(id=pk).update(**content)
        customer = Customer.objects.get(id=pk)
        return JsonResponse(customer, encoder=CustomerDetailEncoder, safe=False)


@require_http_methods(["GET"])
def auotomobile_vo_list(request):
    if request.method == "GET":
        automobiles = AutomobileVO.objects.all()
        return JsonResponse(
            {"automobiles": automobiles}, encoder=AutomobileVODetailEncoder, safe=False
        )


@require_http_methods(["GET", "POST"])
def api_list_sales_persons(request):
    """
    Lists the employees names
    """
    if request.method == "GET":
        sales_persons = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_persons": sales_persons}, encoder=SalesPersonDetailEncoder
        )

    else:  # POST
        content = json.loads(request.body)
        sales_person = SalesPerson.objects.create(**content)
        return JsonResponse(sales_person, encoder=SalesPersonDetailEncoder, safe=False)


@require_http_methods(["PUT", "DELETE", "GET"])
def api_show_sales_person(request, pk):
    """
    Returns the details for the customer specified by the pk paramenter
    """

    if request.method == "GET":
        sales_person = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonDetailEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = SalesPerson.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:  # PUT
        content = json.loads(request.body)
        SalesPerson.objects.filter(id=pk).update(**content)
        sales_person = SalesPerson.objects.get(id=pk)
        return JsonResponse(sales_person, encoder=SalesPersonDetailEncoder, safe=False)


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    """
    Lists the employees names
    """
    if request.method == "GET":
        sales = SaleRecord.objects.all()
        return JsonResponse(
            {"sales": sales}, encoder=SaleRecordDetailEncoder, safe=False
        )

    else:  # POST
        try:
            content = json.loads(request.body)
            # print(content)

            sale_content = {
                "price": content["price"],
                "sales_person": SalesPerson.objects.get(id=content["sales_person"]),
                "automobile": AutomobileVO.objects.get(vin=content["automobile"]),
                "customer": Customer.objects.get(id=content["customer"]),
            }
            print(sale_content)
            sale = SaleRecord.objects.create(**sale_content)

            return JsonResponse(
                {"sale": sale}, encoder=SaleRecordDetailEncoder, safe=False
            )
        except Exception as e:
            print("test e", e)
            response = JsonResponse({"message": str(e)})
            response.status_code = 400
            return response
