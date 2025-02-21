from django.urls import path
from .views import MitarbeiterView, MitarbeiterDetailView
# from .dataimport import *

urlpatterns = [
    path('', MitarbeiterView.as_view(), name="Mitarbeiter"),
    path('<int:pk>/', MitarbeiterDetailView.as_view(), name="MitarbeiterDetail"),
]