from django.urls import path

from .views import api_list_service_appointments, api_list_technicians, api_list_inventory_vins_vo, api_show_service_detail

urlpatterns = [
    path("service/", api_list_service_appointments, name="api_create_service"),
    path("service/<str:input_vin>/vin/", api_list_service_appointments, name="api_list_service"),
    path("service/<int:pk>/", api_show_service_detail, name="api_show_service_detail"),
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("inventoryvo/", api_list_inventory_vins_vo, name="api_list_inventory_vins_vo")
]
