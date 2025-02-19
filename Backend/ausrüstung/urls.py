from django.urls import path
from . import views

urlpatterns = [
    path('ausrüstung', views.ausrüstung, name='ausrüstung'),
    
]