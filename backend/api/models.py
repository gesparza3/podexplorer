from django.contrib.auth.models import User
from django.db import models

class Podcast(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    category = models.CharField(max_length=30, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name="podcasts",
                              on_delete=models.CASCADE, null=True)
