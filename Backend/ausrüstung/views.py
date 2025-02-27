from django.shortcuts import render
from .models import Product
from rest_framework import generics
from .serializers import ProductAPISerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

#def product(request):
   # product = Product.objects.all()
   # return render(request, 'product.html', {'product': product})

# Create your views here.
class ProductAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductAPISerializer
   #  permission_classes = [IsAuthenticated]
   #  authentication_classes = [JWTAuthentication]

class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductAPISerializer
   #  permission_classes = [IsAuthenticated]
   #  authentication_classes = [JWTAuthentication]