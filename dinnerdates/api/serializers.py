from users.models import CustomUser 
from dashboard.models import DineOut
from rest_framework import serializers

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'first_name', 'username', 'email', 'address', 'lat', 'lng', 'price', 'rating', 'distance', 'categories', 'budget', 'frequency', 'special_dates', 'dineout_set'] 

class RestaurantSerializer(serializers.ModelSerializer):
        class Meta: 
            model = DineOut     
            fields = ['user', 'restaurant', 'date', 'rating', 'restaurant_id', 'image_url', 'restaurant_url']   