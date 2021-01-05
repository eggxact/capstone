from django.urls import path 
from .views import SignUpView

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('dashboard/', TemplateView.as_view(template_name="dashboard.html"), name='dashboard'),
]