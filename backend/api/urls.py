from django.urls import path, include

from .api import RegistrationAPI, LoginAPI, UserAPI


# from rest_framework.authtoken import views as drf_views

urlpatterns = [
    path('api/auth/', include('knox.urls')),
    path('api/register/', RegistrationAPI.as_view()),
    path('api/login/', LoginAPI.as_view()),
    path('api/user/', UserAPI.as_view()),
]
