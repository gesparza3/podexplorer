from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from .models import Podcast

# Convert Podcast model data to Podcast object
class PodcastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Podcast
        fields = ('id', 'title', 'category', 'description')

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    # Create new user to add to database
    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        None,
                                        validated_data['password'])
        return user

# Convert model data to User object
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

# Validate valid user and return User object
class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Bad credentials.") # Alert bad auth
