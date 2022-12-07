import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

from service_rest.models import InventoryVinsVO


def get_inventory_vins():
    response = requests.get("http://inventory-api:8000/api/automobiles/")
    content = json.loads(response.content)
    for auto in content["autos"]:
        print(auto["vin"])
        InventoryVinsVO.objects.update_or_create(
            defaults={"vin_vo": auto["vin"],
                },
            )


def poll():
    while True:
        print('Service poller polling for data')
        try:
            get_inventory_vins()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
