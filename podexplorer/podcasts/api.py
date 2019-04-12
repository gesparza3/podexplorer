from .models import Podcast
from .serializers import PodcastSerializer, CreateUserSerializer, UserSerializer

from rest_framework import viewsets, permissions, generics
from rest_framework.decorators import action
from rest_framework.response import Response

from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated

class PodcastViewSet(viewsets.ModelViewSet):
    queryset = Podcast.objects.filter()
    serializer_class = PodcastSerializer

    def get_queryset(self):
        return self.request.user.podcasts.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    @action(methods=['get'], detail=False)
    def newest(self, request):
        newest = self.get_queryset().order_by('created_at').last()
        serializer = self.get_serializer_class()(newest)
        return Response(serializer.data)
