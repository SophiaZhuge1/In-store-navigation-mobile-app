import graphene
from graphene_django.type import DjangoObjectType

class Stocks(DjangoObjectType):
    class Meta:
        model = Items


