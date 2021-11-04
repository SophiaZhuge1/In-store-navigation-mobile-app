import graphene
from graphene_django import DjangoObjectType
from .models import Items

class Stocks(DjangoObjectType):
    class Meta:
        model = Items

class Query(graphene.ObjectType):
    all_items = graphene.List(Stocks)

    def resolve_all_items(self, info, **kwargs):
        return Items.objects.all()


