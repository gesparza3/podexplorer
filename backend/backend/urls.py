from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # path(r'', include('api.urls')),
    path('', include('api.urls')),
    path('chat/', include('chat.urls')),
]
