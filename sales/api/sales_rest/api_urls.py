from django.urls import path

from .views import (
    api_list_customers, api_show_customers, api_list_sales_persons, api_show_sales_person, api_list_sales, auotomobile_vo_list, auotomobile_vo_detail
)

urlpatterns = [
    path("customers/", api_list_customers, name="api_list_customers"),
    path("customers/<int:pk>", api_show_customers, name="api_show_customers"),
    path("sales_persons/", api_list_sales_persons, name="api_list_sales_persons"),
    path("sales_persons/<int:pk>", api_show_sales_person, name="api_show_sales_person"),
    path("salerecords/", api_list_sales, name="api_list_sales"),
    path("salerecords/sales_person/<int:employee_id>", api_list_sales, name="api_list_sales"),
    path("autos/", auotomobile_vo_list, name="auto_vo_list"),
    path("autos/<int:pk>", auotomobile_vo_detail, name="auto_vo_detail"),
]
