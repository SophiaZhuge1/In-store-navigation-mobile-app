"""store_navigation URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
#from django.views.decorators.csrf import ensure_csrf_cookie
from app import views
from app.views import NavigationAPI


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home),
    path('navigation/', NavigationAPI.as_view()),
    path('<str:item_name>', views.index, name="index"),
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True)))
]
