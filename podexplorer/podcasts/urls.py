from django.urls import path
from . import views

urlpatterns = [
    path('api/podcast/', views.PodcastListCreate.as_view() ),
]
