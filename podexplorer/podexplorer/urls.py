from django.contrib import admin
from django.urls import path, include
# from django.conf.urls import include, url
from podcasts import endpoints

from django.contrib.auth.views import LoginView
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(endpoints)),
    path('login/', LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('', include('frontend.urls')),
]
