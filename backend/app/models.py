from django.db import models
from django.db.models import Model

# Create your models here.
class Items(models.Model):
    name = models.CharField(max_length=63)
    category = models.CharField(max_length=32)
    nutritional_info = models.TextField()
    location = models.IntegerField()

    def __str__(self):
        return self.name + " " + self.category