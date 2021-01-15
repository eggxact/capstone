from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import UserViewSet, CurrentUserView

router = DefaultRouter()
router.register(r'users', UserViewSet) 

urlpatterns = router.urls + [
    path('currentuser/', CurrentUserView.as_view())
]