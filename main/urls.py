from django.urls import path
from . import views

app_name = 'main'
urlpatterns = [
    path('', views.index, name='index'),
    path('ajax-number/', views.ajax_number, name='ajax_number'),
]