from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response

from knox.models import AuthToken

from .serializers import (CreateUserSerializer, UserSerializer,
                           LoginUserSerializer, PodcastSerializer)

# Authenticated users can retrieve all of their stored
# podcasts
class PodcastViewSet(viewsets.ModelViewSet):
    # Restrict to authorized users
    permission_classes = [permissions.IsAuthenticated, ]

    # Define serializer
    serializer_class = PodcastSerializer

    # On GET, return all user's podcasts
    def get_queryset(self):
        return self.request.user.podcasts.all()

    # On submit, add new podcast and tag user
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

# Allow creation of new users
class RegistrationAPI(generics.GenericAPIView):
    # Define serializer
    serializer_class = CreateUserSerializer

    # On POST save new user and return user info with a valid token
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True) # Raise error if not valid
        user = serializer.save()
        return Response({
            "user": UserSerializer(user,
                                   context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# Allow valid users to login to API
class LoginAPI(generics.GenericAPIView):
    # Define serializer
    serializer_class = LoginUserSerializer

    # Return user info with valid token
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True) # Raise error if not valid
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user,
                                   context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# Retrieve current user info
class UserAPI(generics.RetrieveAPIView):
    # Restrict to authorized user
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = UserSerializer

    # Return user info
    def get_object(self):
        return self.request.user
