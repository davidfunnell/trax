# Generated by Django 4.0.3 on 2022-12-17 01:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0012_alter_inventoryvinsvo_import_href_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='serviceappointment',
            name='inventory',
        ),
        migrations.AlterField(
            model_name='inventoryvinsvo',
            name='import_href',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='inventoryvinsvo',
            name='manufacturer',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='inventoryvinsvo',
            name='model',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='inventoryvinsvo',
            name='vin_vo',
            field=models.CharField(max_length=17, unique=True),
        ),
        migrations.AlterField(
            model_name='inventoryvinsvo',
            name='year',
            field=models.PositiveSmallIntegerField(null=True),
        ),
    ]
