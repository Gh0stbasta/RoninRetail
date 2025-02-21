from django.shortcuts import render
from .serializers import MitarbeiterSerializer
from .models import Mitarbeiter
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

# Create your views here.

class MitarbeiterView(generics.ListCreateAPIView):
    queryset = Mitarbeiter.objects.all()
    serializer_class = MitarbeiterSerializer
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

class MitarbeiterDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Mitarbeiter.objects.all()
    serializer_class = MitarbeiterSerializer
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]
