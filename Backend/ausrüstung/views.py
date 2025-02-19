from django.shortcuts import render
from .models import Ausrüstung

def ausrüstung(request):
    ausrüstung = Ausrüstung.objects.all()
    return render(request, 'ausrüstung.html', {'ausrüstung': ausrüstung})

# Create your views here.
