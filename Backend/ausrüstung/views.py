from django.shortcuts import render
from .models import Product
from rest_framework import generics
from .serializers import ProductAPISerializer

#def product(request):
   # product = Product.objects.all()
   # return render(request, 'product.html', {'product': product})

# Create your views here.
class ProductAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductAPISerializer