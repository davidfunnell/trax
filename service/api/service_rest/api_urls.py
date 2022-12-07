from django.urls import path

from .views import api_list_service_appointments, api_list_technicians

urlpatterns = [
    path("service/", api_list_service_appointments, name="api_create_service"),
    path("service/<str:input_vin>/vin/", api_list_service_appointments, name="api_list_service"),
    # path("hats/<int:pk>/", api_show_hat, name="api_show_hat"),
    # path("locationsvo/", api_locations_vo, name="api_locations_vo"),
    path("technicians/", api_list_technicians, name="api_list_technicians")
]
