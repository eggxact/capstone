from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import UserViewSet, CurrentUserView, RestaurantViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet) 
router.register(r'restaurants', RestaurantViewSet)

urlpatterns = router.urls + [
    path('currentuser/', CurrentUserView.as_view())
]