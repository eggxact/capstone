from django.shortcuts import render
from rest_framework import generics, viewsets, permissions

from users.models import CustomUser
from dashboard.models import DineOut

from .serializers import CustomUserSerializer, RestaurantSerializer

class UserViewSet(viewsets.ModelViewSet):
    '''
    API endpoint that allows users to be viewed or edited.
    '''
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [permissions.IsAuthenticated] 

class CurrentUserView(generics.RetrieveAPIView):
    serializer_class = CustomUserSerializer
    queryset = CustomUser.objects.all()
    def get_object(self):
        return self.request.user

class RestaurantViewSet(viewsets.ModelViewSet):
    serializer_class = RestaurantSerializer
    queryset = DineOut.objects.all()
    permission_classes = [permissions.IsAuthenticated] 