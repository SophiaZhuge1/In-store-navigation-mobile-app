from django.shortcuts import render
from django.http import HttpResponse
from .models import Items

# Create your views here.

def home(request):
    return render(request, 'index.html')

def index(response, item_name):
    it = Items.objects.get(item_name=item_name)
    return HttpResponse("<h1>%s</h1><p>%s</p>" % (it.item_name, it.price))
