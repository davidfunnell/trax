from django.contrib import admin
from .models import SalesPerson, Customer, AutomobileVO, SaleRecord


@admin.register(SalesPerson)
class SalesPersonAdmin(admin.ModelAdmin):
    pass


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    pass


@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    pass


@admin.register(SaleRecord)
class SaleRecordAdmin(admin.ModelAdmin):
    pass
