from django.db import models

# Create your models here.
class Items(models.Model):
    item_id = models.IntegerField(default=9)
    price = models.CharField(max_length=10, default='0.00')
    brand_name = models.CharField(max_length=32, default='Tilda')
    item_name = models.CharField(max_length=62, default='rice')
    category = models.CharField(max_length=32, default='grain')
    product_description = models.TextField(blank=True)
    nutritional_info = models.TextField(blank=True)
    aisle_id = models.IntegerField(default=1)
    shelf_id = models.IntegerField(default=5) 
    position = models.IntegerField(default=5) # 1-top, 2-middle, 3-bottom 
    ingredients = models.TextField(blank=True)
    allergy_info = models.TextField(blank=True)
    is_vegan = models.BooleanField(default=True)
    is_diary_free = models.BooleanField(default=True)
    is_nut_free = models.BooleanField(default=True)
    is_gluten_free = models.BooleanField(default=True)
    net_weight = models.CharField(max_length=5, default='1kg')

