from django.urls import path, include
from rest_framework import routers

from .api import RegistrationAPI, LoginAPI, UserAPI
from .api import PodcastViewSet

router = routers.DefaultRouter()
router.register('api/podcasts', PodcastViewSet, base_name='podcasts')

urlpatterns = [
    path("", include(router.urls)),
    path('api/auth/', include('knox.urls')),
    # path('api/register/', RegistrationAPI.as_view()),
    path('api/login/', LoginAPI.as_view()),
    path('api/user/', UserAPI.as_view()),
]
