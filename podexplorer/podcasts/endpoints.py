from django.conf.urls import include, url
from rest_framework import routers

from .api import PodcastViewSet

router = routers.DefaultRouter()
router.register('podcasts', PodcastViewSet, base_name='podcasts')

urlpatterns = [
    url("^", include(router.urls)),
]
