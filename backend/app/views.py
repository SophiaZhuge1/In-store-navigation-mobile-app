from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
import json
from store_navigation.pathDetermination import get_optimal_path_through_store as get_path
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt


@method_decorator(csrf_exempt, name='dispatch')
class NavigationAPI(View):
    def get(self, request):
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


# Create your views here.
def home(request):
    return render(request, 'index.html')
