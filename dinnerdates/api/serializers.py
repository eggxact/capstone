from users.models import CustomUser 
from rest_framework import serializers

class CustomUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'first_name', 'username', 'email', 'address', 'lat', 'lng', 'price', 'rating', 'distance', 'categories', 'budget', 'frequency', 'special_dates'] 

        