from django.db import models

class DineOut(models.Model):
    restaurant = models.CharField(max_length=250)
    date = models.DateField()
    rating = models.BooleanField(default=True)
    
    def __str__(self):
        return self.restaurant
