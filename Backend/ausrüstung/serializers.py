from rest_framework import serializers
from .models import Product


class ProductAPISerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'name',
            'zustand',
            'preis',
            'image'
]