from users.models import CustomUser 
from rest_framework import serializers

class CustomUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['first_name', 'username', 'email', 'address'] 