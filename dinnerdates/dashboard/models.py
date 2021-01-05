from django.db import models

class UserProfile(models.Model):
    username = models.ForeignKey('users.CustomUser', on_delete=models.CASCADE)
    address = models.CharField(max_length=250)

    def __str__(self):
        return self.username

class DineOut(models.Model):
    restaurant = models.CharField(max_length=250)
    date = models.DateField()
    rating = models.BooleanField(default=True)
    
    def __str__(self):
        return self.restaurant
