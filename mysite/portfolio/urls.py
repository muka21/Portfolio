from django.conf.urls import url
from . import views
from django.contrib import admin


urlpatterns = [
    url(r'^$', views.home,name='home'),
    url(r'^admin/',admin.site.urls),
    url(r'^success/$', views.success, name='success'),
]
