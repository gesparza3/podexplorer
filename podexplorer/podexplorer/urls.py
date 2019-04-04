from django.urls import path, include

urlpatterns = [
    path('', include('podcasts.urls')),
]
