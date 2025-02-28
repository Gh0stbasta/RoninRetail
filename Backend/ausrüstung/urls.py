from django.urls import path
from .views import ProductAPIView, ProductDetailView  # Import ProductAPIView
#from .dataimport import *  # Import import function

urlpatterns = [
    path('', ProductAPIView.as_view(), name='product'),  # Ensure this line is correct
    path('<int:pk>/', ProductDetailView.as_view(), name="product_detail"),
]