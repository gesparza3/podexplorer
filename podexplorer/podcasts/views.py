from podcasts.models import Podcast
from podcasts.serializers import PodcastSerializer
from rest_framework import generics

class PodcastListCreate(generics.ListCreateAPIView):
    queryset = Podcast.objects.all()
    serializer_class = PodcastSerializer
