from django.db import models

# Create your models here.
class Items(models.Model):
    name = models.CharField(max_length=62)
    category = models.CharField(max_length=32)
    nutritional_info = models.TextField()
    location = models.IntegerField()