from django.db import models

# Create your models here.
class Ausrüstung(models.Model):
    name = models.CharField(max_length=200)
    zustand = models.TextField()
    preis = models.DecimalField(max_digits=7, decimal_places=2)
    image = models.ImageField(upload_to='images/')
    
    def __str__(self):
        return self.name
