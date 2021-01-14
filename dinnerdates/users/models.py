from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    address = models.CharField(max_length=250) 
    lat = models.CharField(max_length=250)
    lng = models.CharField(max_length=250)
    price = models.CharField(max_length=250)
    rating = models.CharField(max_length=250)
    distance = models.CharField(max_length=250)

    def __str__(self):
        return self.username
