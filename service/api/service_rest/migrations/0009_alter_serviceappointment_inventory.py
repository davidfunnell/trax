# Generated by Django 4.0.3 on 2022-12-16 23:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0008_remove_serviceappointment_manufacturer_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='serviceappointment',
            name='inventory',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='inventory', to='service_rest.inventoryvinsvo'),
        ),
    ]