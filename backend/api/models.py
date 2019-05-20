from django.contrib.auth.models import User
from django.db import models

# Podcast model for storing podcast data
class Podcast(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    category = models.CharField(max_length=30, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    # User is tagged to podcast to maintain unique libraries
    owner = models.ForeignKey(User, related_name="podcasts",
                              on_delete=models.CASCADE, null=True)
