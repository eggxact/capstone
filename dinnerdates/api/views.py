from django.shortcuts import render
from rest_framework import generics, viewsets, permissions

from users.models import CustomUser

from .serializers import CustomUserSerializer

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