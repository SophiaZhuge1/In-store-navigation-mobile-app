from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from store_navigation.pathDetermination import get_optimal_path_through_store as get_path
from .models import Items

import json


@method_decorator(csrf_exempt, name='dispatch')
class NavigationAPI(View):
    def post(self, request):
        data = json.loads(request.body.decode("utf-8"))
        list_of_item_locations = data.get('list_of_item_locations')

        path_through_store = get_path(list_of_item_locations)

        path_for_items = [int(i) for i in path_through_store[0]]
        path_to_checkout = [int(i) for i in path_through_store[1]]

        data = {
            "path_for_items": path_for_items,
            "path_to_checkout": path_to_checkout
        }

        return JsonResponse(data, status=200)


def home(request):
    return render(request, 'index.html')


def index(response, item_name):
    it = Items.objects.get(item_name=item_name)
    return HttpResponse("<h1>%s</h1><p>%s</p>" % (it.item_name, it.price))
