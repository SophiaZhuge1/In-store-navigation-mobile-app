import graphene
from graphene_django import DjangoObjectType
from .models import Items

class Stocks(DjangoObjectType):
    class Meta:
        model = Items

    
class Query(graphene.ObjectType):
    all_items = graphene.List(Stocks) 
    # query item with id and name 
    item = graphene.Field(Stocks, id=graphene.Int(), item_name=graphene.String())

    def resolve_all_items(self, info, **kwargs):
        return Items.objects.all()
    
    def resolve_item(self, info, **kwargs):
        id = kwargs.get('id')
        item_name = kwargs.get('item_name')
        # get item by id
        if id is not None:
            return Items.objects.get(pk=id)
        # get item by item name
        if item_name is not None:
            return Items.objects.get(item_name = item_name)

        return None

    


