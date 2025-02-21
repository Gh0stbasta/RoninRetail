from django.urls import path
from .views import ProductAPIView  # Import ProductAPIView

urlpatterns = [
    path('', ProductAPIView.as_view(), name='product'),  # Ensure this line is correct
]