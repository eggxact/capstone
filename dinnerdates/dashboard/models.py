from django.db import models
from users.models import CustomUser

class DineOut(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    restaurant = models.CharField(max_length=250)
    restaurant_id = models.CharField(max_length=1000)
    date = models.DateField(null=True, blank=True)
    rating = models.BooleanField(default=True)
    
    def __str__(self):
        return self.restaurant